import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useNavigate } from "react-router-dom";
import {  prevPage, known } from "../features/identifierSlice";
import { Button, Grid } from "@mui/material";
import { openSnack } from "../features/snackbarSlice";

export default function SymtomOption() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [symtom, setSymtom] = useState(data);

  const handleSubmit = () => {
    for (let el of symtom) {
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
                    getOptionLabel={(option) => option}
                    onChange={(e, v) => {
                      let result = symtom;
                      result = result.map((el) => {
                        if (p.id === el.id) {
                          el.b = v;
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
                          el.b = v;
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
      "makanan menyelip",
      "gigi terasa ngilu",
      "gigi terasa sakit",
      "area sekitar gusi / gusi disertai pembengkakan",
    ],
    id: 1,
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
];

const symtoms = [
  {
    q: "Keluhan apa saja yang sedang anda rasakan saat ini? ",
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

