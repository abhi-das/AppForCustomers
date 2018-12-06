export interface Customer {
    productName: string;
    businessReference: string;
    quoteExpiringDate: string;
    quoteReference: string;
    caseReceived: string;
    caseStatus: string;
    lastUpdated: string;
    illustrationIssuedDate: string;
    funds: Array<any>;
    customerDeails: {
        surname: string;
        forename: string;
        dob: string;
        postcode: string;
    };
}
