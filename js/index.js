var travel = [
    ["Ravan","Huseyn","ulvi"],
    ["Aynur","Tahire","fatime",
        [
        'Tahire ve Aynur', true, "2+2", [
            "Maraqlı"
        ],
        ],
        ["IATC","ADNSU"]
    ],
    ["AzərbaYcan","Italiya","Argentina","Türkiyə"]
]


// Menim adim Ravandir. Men ADNSU telebesiyem ve IATCde tehsil aliram.

console.log("Menim adim "+travel[0][0]+"dir."+" Men "+travel[1][4][1]+" telebesiyem ve "+travel[1][4][0]+"de tehsil aliram.")


// Azərbaycan = Y
// Ulvi       = u
// Huseyn     = s
// Tahire     = i
// Fatime     = f

console.log(travel[2][0][6]+travel[0][2][0]+travel[0][1][2]+travel[1][1][3]+travel[1][2][0])
