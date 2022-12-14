import { createSlice } from '@reduxjs/toolkit'

export const configSlice = createSlice({
    name:"config",
    initialState:{
        bulan:[
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember",
        ],
        hari:[
            "Minggu",
            "Senin",
            "Selasa",
            "Rabu",
            "Kamis",
            "Jum'at",
            "Sabtu",
        ]
    },
    reducers:{

    }
})

export const { } = configSlice.actions
export default configSlice.reducer