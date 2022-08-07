import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useNavigate } from "react-router-dom";
import { prevPage, known } from "../features/identifierSlice";
import { Button, Grid } from "@mui/material";
import { openSnack } from "../features/snackbarSlice";

export default function SymtomOption() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [symtom, setSymtom] = useState(data);

  const handleSubmit = () => {
    for (let el of symtom) {
      console.log(el)
      if (el.b === undefined) {
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
    dispatch(known(symtom));
    navigate("/5");
  };

  const handleBack = () => {
    dispatch(prevPage());
    setSymtom(data);
    navigate("/3");
  };

  return (
    <>
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
                      let result = symtom;
                      result = result.map((el) => {
                        if (p.id === el.id) {
                          console.log(v, 'this is the vlue for MultipleSelection Symptoms')
                          el.b = v.map((opt) => opt.id).sort();
                          
                          console.log(el.b, 'this is the answers for multiple symptoms');
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
                      let result = symtom;
                      result = result.map((el) => {
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
            >
              <Button onClick={handleBack} variant="text" color="primary">
                Back
              </Button>
              <Button onClick={handleSubmit} variant="text" color="success">
                Find
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

// data
const data = [
  {
    q: "Keluhan apa saja yang sedang anda rasakan saat ini?",
    a: [
      "makanan menyelip",
      "gigi terasa ngilu",
      "gigi terasa sakit",
      "area sekitar gusi / gusi disertai pembengkakan",
    ],
    id: 1,
  },
  {
    q: "Dimanakah lokasi yang terasa sakit? ",
    a: ["rahang atas", "rahang bawah"],
    id: 2,
  },
  {
    q: "Pada gigi bagian mana rasa sakit tersebut dirasakan?",
    a: ["gigi bagian depan", "gigi bagian belakang"],
    id: 3,
  },
  {
    q: "Sejak kapan rasa sakit tersebut berlangsung? ",
    a: [
      "beberapa jam yang lalu",
      "beberapa hari yang lalu",
      "beberapa minggu yang lalu",
      "beberapa bulan yang lalu",
      "beberapa tahun yang lalu",
    ],
    id: 4,
  },
  {
    q: "Bagaimana rasa sakit tersebut dapat timbul?  ",
    a: ["spontanitas", "hilang timbul"],
    id: 5,
  },
  {
    q: "Seberapa berat rasa sakit yang dirasakan?   ",
    a: ["ringan", "sedang", "berat"],
    id: 6,
  },

  {
    q: "Apa saja faktor yang memperparah rasa sakit? ",
    a: [
      "makanan asam / manis",
      "makanan / minuman dingin",
      "makanan / minuman panas",
    ],
    id: 7,
  },
  {
    q: "Apakah rasa sakit timbul saat dipakai mengunyah?    ",
    a: ["ya", "tidak"],
    id: 8,
  },
  {
    q: "Apakah saat rasa sakit timbul, disertai dengan demam?     ",
    a: ["ya", "tidak"],
    id: 9,
  },
];

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
];
