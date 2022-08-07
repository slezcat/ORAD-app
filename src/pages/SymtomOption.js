import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useNavigate } from "react-router-dom";
import { prevPage, known } from "../features/identifierSlice";
import { Button, Grid } from "@mui/material";
import { openSnack } from "../features/snackbarSlice";
import { Card, CardActions } from "@mui/material";
import { data } from "../data";

export default function SymtomOption() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [symtom, setSymtom] = useState();

  const handleSubmit = () => {
    console.log(symtom);
    try {
      // for loop element yang ada di symtom
      for (let el of symtom) {
        if (el.b === undefined || el.b === null) {
          // pengecekan kalau semuanya dipilih (kalo salah satu ada yang undefined akan meng return opensnack hence the loop)
          return dispatch(
            openSnack({ option: "error", message: "Please add all fields!" })
          );
        }
      }
      dispatch(
        openSnack({
          option: "success",
          message: "Data has been recorded succesfully!",
        })
      );
    } catch (error) {
      return dispatch(
        openSnack({ option: "error", message: "Please add all fields!" })
      );
    }

    dispatch(known(symtom)); // known yang ada di identifier akan di call dan dimasukkan symtom;;; contoh dalam identifier: known: (state.action) => { state.knownSymptom = action.payload}
    navigate("/5");
  };

  const handleBack = () => {
    dispatch(prevPage());
    navigate("/3");
  };

  return (
    <>
      <div>
        <Card sx={{ height: "50vh", overflowY: "scroll" }} raised={false}>
          <CardActions>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Grid container rowSpacing={2}>
                  {multipleSelectionSymtoms.map((p, i) => {
                    return (
                      <Grid item xs={12}>
                        <Autocomplete
                          multiple
                          id="tags-standard"
                          options={p.a}
                          getOptionLabel={(option) => option.label}
                          onChange={(e, v) => {
                            let result = data.map((el) => {
                              if (p.id === el.id) {
                                console.log(v, "this is v in onchange");
                                el.b = v.map((opt) => opt.id).sort();

                                console.log(
                                  v.map((opt) => opt.id),
                                  "this is mapped v search for an id"
                                );
                              }
                              return el;
                            });
                            setSymtom(result);
                          }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              variant="standard"
                              label={p.q}
                              placeholder="Silahkan pilih lebih dari 1 ..."
                            />
                          )}
                        />
                      </Grid>
                    );
                  })}
                  {symtoms.map((p, i) => {
                    return (
                      <Grid item xs={12}>
                        <Autocomplete
                          disablePortal
                          id="combo-box-demo"
                          options={p.a}
                          name={i}
                          renderInput={(params) => (
                            <TextField {...params} label={p.q} />
                          )}
                          onChange={(e, v) => {
                            let result = data.map((el) => {
                              if (p.id === el.id) {
                                el.b = v.id;
                              }
                              return el;
                            });
                            setSymtom(result);
                          }}
                          fullWidth={true}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ mt: 2 }}
                  ></Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
        <Grid container xs={12} justifyContent="space-between" sx={{ mt: 2 }}>
          <Button onClick={handleBack} variant="text" color="primary">
            Back
          </Button>
          <Button onClick={handleSubmit} variant="text" color="success">
            Find
          </Button>
        </Grid>
      </div>
    </>
  );
}

const multipleSelectionSymtoms = [
  {
    q: "Keluhan apa saja yang sedang anda rasakan saat ini?",
    a: [
      { label: "makanan menyelip", id: 0 },
      { label: "gigi terasa ngilu", id: 1 },
      { label: "gigi terasa sakit", id: 2 },
      { label: "area sekitar gusi / gusi disertai pembengkakan", id: 3 },
    ],
    id: 1,
  },
  {
    q: "Apa saja faktor yang memperparah rasa sakit? ",
    a: [
      { label: "makanan asam / manis", id: 0 },
      { label: "makanan / minuman dingin", id: 1 },
      { label: "makanan / minuman panas", id: 2 },
    ],
    id: 7,
  },
];

const symtoms = [
  {
    q: "Keluhan apa saja yang sedang anda rasakan saat ini? ",
    a: [
      { label: "rahang atas", id: 0 },
      { label: "rahang bawah", id: 1 },
    ],
    id: 2,
  },
  {
    q: "Pada gigi bagian mana rasa sakit tersebut dirasakan?",
    a: [
      { label: "gigi bagian depan", id: 0 },
      { label: "gigi bagian belakang", id: 1 },
    ],
    id: 3,
  },
  {
    q: "Sejak kapan rasa sakit tersebut berlangsung? ",
    a: [
      { label: "beberapa jam yang lalu", id: 0 },
      { label: "beberapa hari yang lalu", id: 1 },
      { label: "beberapa minggu yang lalu", id: 2 },
      { label: "beberapa tahun yang lalu", id: 3 },
      { label: "beberapa bulan yang lalu", id: 4 },
    ],
    id: 4,
  },
  {
    q: "Bagaimana rasa sakit tersebut dapat timbul?  ",
    a: [
      { label: "spontanitas", id: 0 },
      { label: "hilang timbul", id: 1 },
    ],
    id: 5,
  },
  {
    q: "Seberapa berat rasa sakit yang dirasakan?   ",
    a: [
      { label: "ringan", id: 0 },
      { label: "sedang", id: 1 },
      { label: "berat", id: 2 },
    ],
    id: 6,
  },
  {
    q: "Apakah rasa sakit timbul saat dipakai mengunyah?    ",
    a: [
      { label: "ya", id: 0 },
      { label: "tidak", id: 1 },
    ],
    id: 8,
  },
  {
    q: "Apakah saat rasa sakit timbul, disertai dengan demam?     ",
    a: [
      { label: "ya", id: 0 },
      { label: "tidak", id: 1 },
    ],
    id: 9,
  },
  {
    q: "Elemen gigi mana yang terlibat",
    a: [
      { label: "11", id: 0 },
      { label: "12", id: 1 },
      { label: "13", id: 2 },
      { label: "14", id: 3 },
      { label: "15", id: 4 },
      { label: "16", id: 5 },
      { label: "17", id: 6 },
      { label: "18", id: 7 },
      { label: "19", id: 8 },
      { label: "20", id: 9 },
      { label: "21", id: 10 },
      { label: "22", id: 11 },
      { label: "23", id: 12 },
      { label: "24", id: 13 },
      { label: "25", id: 14 },
      { label: "26", id: 15 },
      { label: "27", id: 16 },
      { label: "28", id: 17 },
      { label: "29", id: 18 },
      { label: "30", id: 19 },
      { label: "31", id: 20 },
      { label: "32", id: 21 },
      { label: "33", id: 22 },
      { label: "34", id: 23 },
      { label: "35", id: 24 },
      { label: "36", id: 25 },
      { label: "37", id: 26 },
      { label: "38", id: 27 },
      { label: "39", id: 28 },
      { label: "40", id: 29 },
      { label: "41", id: 30 },
      { label: "42", id: 31 },
      { label: "43", id: 32 },
      { label: "44", id: 33 },
      { label: "45", id: 34 },
      { label: "46", id: 35 },
      { label: "47", id: 36 },
      { label: "48", id: 37 },
    ],
    id: 10,
  },
  {
    q: "Bagaimana radiopasitas pada bagian mahkota?",
    a: [
      { label: "radioopak", id: 0 },
      { label: "radiolusen", id: 1 },
    ],
    id: 11,
  },

  {
    q: "Dimana lokasinya?",
    a: [
      { label: "mesial", id: 0 },
      { label: "distal", id: 1 },
      { label: "oklusal", id: 2 },
      { label: "incisal", id: 3 },
      { label: "servikal", id: 4 },
    ],
    id: 12,
  },
  {
    q: "Bagaimana kedalamannya?",
    a: [
      { label: "bagian enamelnya saja", id: 0 },
      { label: "dari enamel hingga dentin", id: 1 },
      { label: "dari enamel hingga pulpa", id: 2 },
    ],
    id: 13,
  },
  {
    q: "Berapa jumlah akarnya?",
    a: [
      { label: "1", id: 0 },
      { label: "2", id: 1 },
      { label: "3", id: 2 },
    ],
    id: 14,
  },
  {
    q: "Bagaimana bentuk akarnya?",
    a: [
      { label: "lurus", id: 0 },
      { label: "Bengkok kearah distal", id: 1 },
      { label: "bengkok kearah mesial", id: 2 },
      { label: "konvergen", id: 3 },
      { label: "divergen", id: 4 },
    ],
    id: 15,
  },
  {
    q: "Bagaimana radiopasitasnya?",
    a: [
      { label: "Seperti bahan salaruan akar", id: 0 },
      { label: "seperti pasak", id: 1 },
    ],
    id: 16,
  },
  {
    q: "Bagaimana kondisi ruang membran periodontalnya?",
    a: [
      { label: "Dalam batas normal", id: 0 },
      { label: "melebar", id: 1 },
      { label: "menghilang", id: 2 },
    ],
    id: 17,
  },
  {
    q: "Dimana lokasi area yang tidak normal?",
    a: [
      { label: "1/3 apikaL", id: 0 },
      { label: "1/3 servikal", id: 1 },
      { label: "2/3 apikal", id: 2 },
      { label: "2/3 servika", id: 3 },
      { label: "seluruh bagian akar", id: 4 },
      { label: "dalam batas normal", id: 5 },
    ],
    id: 18,
  },
  {
    q: "Bagaimana kondisi lamina duranya?",
    a: [
      { label: "Dalam batas normal", id: 0 },
      { label: "melebar", id: 1 },
      { label: "menghilang", id: 2 },
    ],
    id: 19,
  },
  {
    q: "Dimana lokasi area yang tidak normal?",
    a: [
      { label: "1/3 apikal", id: 0 },
      { label: "1/3 servika", id: 1 },
      { label: "2/3 apikal", id: 2 },
      { label: "2/3 servikal", id: 3 },
      { label: "seluruh bagian akar", id: 4 },
      { label: "dalam batas normal", id: 5 },
    ],
    id: 20,
  },
  {
    q: "Bagaimana kondisi puncak tulang alveolarnya?",
    a: [
      { label: "Dalam batas normal", id: 0 },
      { label: "mengalami penurunan tulang secara horizontal", id: 1 },
      { label: "mengalami penurunan tulang secara vertikal", id: 2 },
    ],
    id: 21,
  },
  {
    q: "Dimana lokasi area yang tidak normal?",
    a: [
      { label: "1/3 apikal", id: 0 },
      { label: "1/3 servikal", id: 1 },
      { label: "2/3 apikal", id: 2 },
      { label: "2/3 servikal", id: 3 },
      { label: "seluruh bagian akar", id: 4 },
      { label: "dalam batas normal", id: 5 },
    ],
    id: 22,
  },
  {
    q: "Seberapa banyak puncak tulang alveolar mengalami penurunan?",
    a: [
      { label: "1 mm", id: 0 },
      { label: "2 mm", id: 1 },
      { label: "3 mm", id: 2 },
      { label: "4 mm", id: 3 },
      { label: "5 mm", id: 4 },
      { label: "6 mm", id: 5 },
      { label: "dalam batas normal", id: 6 },
    ],
    id: 23,
  },
  {
    q: "Bagaimana kondisi radiopasitas dari furkasinya",
    a: [
      { label: "Dalam batas normal", id: 0 },
      { label: "terdapat gambaran lesi radiolusen", id: 1 },
      { label: "terdapat gambaran lesi radiopak", id: 2 },
    ],
    id: 24,
  },

  {
    q: "Bagimana kondisi pada bagian periapikalnya?",
    a: [
      { label: "Dalam batas normal", id: 0 },
      { label: "terdapat lesi", id: 1 },
    ],
    id: 25,
  },
  {
    q: "Bagaimana radiopasitas dari lesi tersebut?",
    a: [
      { label: "Terdapat gambaran lesi radiolusen", id: 0 },
      { label: "terdapat gambaran lesi radiopak", id: 1 },
      { label: "dalam batas normal", id: 2 },
    ],
    id: 26,
  },
  {
    q: "Bagaimana batas lesinya?",
    a: [
      { label: "Difuse (batas tidak jelas dan tidak tegas)", id: 0 },
      { label: "batas jelas dan tidak tegas", id: 1 },
      { label: "batas jelas dan tegas", id: 2 },
      { label: "dalam batas normal", id: 3 },
    ],
    id: 27,
  },
  {
    q: "Berapa ukuran lesinya?",
    a: [
      { label: "1 mm", id: 0 },
      { label: "2 mm", id: 1 },
      { label: "3 mm", id: 2 },
      { label: "4 mm", id: 3 },
      { label: "5 mm", id: 4 },
      { label: "6 mm", id: 5 },
      { label: "dalam batas normal", id: 6 },
    ],
    id: 28,
  },
];
