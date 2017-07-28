class PhepTinh {
    constructor(soa, sob, tenPhepTinh) {
        this.soa = soa;
        this.sob =sob;
        this.tenPhepTinh = tenPhepTinh;
    }

    getResultString() {
        let toanTu = '*';
        if (this.tenPhepTinh === 'CONG') toanTu = '+';
        if (this.tenPhepTinh === 'TRU') toanTu = '-';
        if (this.tenPhepTinh === 'CHIA') toanTu = '/';
        const veTrai = `${this.soa} ${toanTu} ${this.sob}`;
        const ketQua = eval(veTrai);
        return `${veTrai} = ${ketQua}`;
    }
}

module.exports = PhepTinh;
