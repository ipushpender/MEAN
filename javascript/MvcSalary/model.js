var details = {
    basicSalary: 0,
    takeSalary(basicSalary) {
        this.basicSalary = basicSalary;
    },
    da() {
        return this.basicSalary * 0.3;
    },
    hra() {
        return this.basicSalary * 0.2;
    },
    ta() {
        return this.basicSalary * 0.1;
    },
    tax() {
        return this.basicSalary * 0.1;
    },
    pf() {
        return this.basicSalary * 0.05;
    },
    gs() {
        return this.basicSalary + this.hra() + this.da() + this.ta() - this.pf();
    },
    ns() {
        return this.gs() - this.tax();
    }
};
