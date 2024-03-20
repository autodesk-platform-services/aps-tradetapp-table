const login = document.getElementById('login');

const QUALIF_SAMPLE_DATA = {
    "pagination": {
        "cursorState": null,
        "limit": 20,
        "nextUrl": null,
        "previousUrl": null
    },
    "results": [
        {
            "id": "602156a978c314006631b6c8",
            "uniqueId": null,
            "questionnaireVersion": "Primary Qualification",
            "qualification": {
                "status": "QUALIFIED_WITH_EXCEPTIONS",
                "internalSingleLimit": 1000000,
                "internalTotalLimit": 4000000,
                "dateExpires": "2025-03-04T05:00:00.000Z",
                "summary": "Please abide by the limits",
                "denialReason": null,
                "preExpirationStatus": null
            },
            "applicationStatus": "NOT_STARTED",
            "applicationDetail": "RENEWAL",
            "companyName": "Building Connected Test ",
            "yearFounded": 1999,
            "stateFounded": "Alabama",
            "taxIdType": "US_FEIN",
            "federalTaxId": "555555477",
            "submissionCurrency": "USD",
            "numberOfHomeOfficeEmployees": 1,
            "numberOfFieldSupervisoryEmployees": 1,
            "hasProfessionalLicenses": false,
            "hasUnionAffiliations": false,
            "hasParentCompany": true,
            "parentCompanyName": "Testing Tests",
            "currentEstimatedBacklog": 66666,
            "insuranceBrokerContactName": "ABC",
            "insuranceBrokerCompanyName": "ABC",
            "insuranceBrokerContactPhone": "7777777777",
            "insuranceBrokerContactEmail": "supertster1@gmail.com",
            "suretyBrokerAgencyCompanyName": null,
            "suretyBrokerContactName": null,
            "suretyBrokerContactPhone": null,
            "suretyCompanyName": null,
            "suretySingleProjectBondingCapacity": null,
            "suretyAggregateBondingCapacity": null,
            "bankName": "Piggy Bank",
            "bankLineOfCreditTotal": 6666,
            "bankLineOfCreditOutstanding": 6666,
            "bankContactName": "Pig-E-Bank",
            "bankContactPhone": "2222222222",
            "bankContactEmail": "test2@gmail.com",
            "dateSubmitted": "2024-01-29T22:16:22.324Z",
            "dateUpdated": "2024-03-04T22:26:46.893Z",
            "csiCodesForWorkPerformed": [
                {
                    "primaryCode": "01",
                    "secondaryCode": "12",
                    "tertiaryCode": "19",
                    "codeDescription": "Contract Interface"
                }
            ],
            "regionsServed": [
                {
                    "region": "Alaska"
                }
            ],
            "marketsServed": [
                {
                    "market": "Civic & Government"
                }
            ],
            "completedReferences": [
                {
                    "projectName": "abc",
                    "location": "Seattle, WA, United States of America",
                    "yearCompleted": 2004,
                    "value": 20,
                    "scope": "High fives",
                    "referenceContactCompany": "High fives R Us",
                    "referenceContactName": "bob joe",
                    "referenceContactPhone": "3333333333",
                    "referenceContactEmail": "joebob@gmail.com",
                    "isLargestProject": false
                },
                {
                    "projectName": "yellow green red",
                    "location": "Jacksonville, FL, United States of America",
                    "yearCompleted": 2020,
                    "value": 455,
                    "scope": "stuff",
                    "referenceContactCompany": "red",
                    "referenceContactName": " blue",
                    "referenceContactPhone": "1111111111",
                    "referenceContactEmail": "redblue@gmail.com",
                    "isLargestProject": false
                },
                {
                    "projectName": "GoBlueRedGreenYellow",
                    "location": "Pittsburgh, PA, United States of America",
                    "yearCompleted": 2011,
                    "value": 234523,
                    "scope": "Flushing toilets",
                    "referenceContactCompany": "Contact R us",
                    "referenceContactName": "Yea Man",
                    "referenceContactPhone": "2222222222",
                    "referenceContactEmail": "supertster1@gmail.com",
                    "isLargestProject": true
                }
            ],
            "companyContacts": [
                {
                    "positionTitle": "tester",
                    "contactName": "supertster1@gmail.com",
                    "contactPhone": "5555555555",
                    "contactEmail": "supertster1@gmail.com",
                    "contactFax": null,
                    "contactType": "COMPANY"
                },
                {
                    "positionTitle": "tsteer",
                    "contactName": "Tsteer1",
                    "contactPhone": "4444444444",
                    "contactEmail": "supertster3@gmail.com",
                    "contactFax": null,
                    "contactType": "PREQUAL"
                }
            ],
            "insuranceCoverages": [
                {
                    "insuranceType": "AUTOMOBILE_LIABILITY",
                    "carrier": null,
                    "perOccurrenceLimit": null,
                    "aggregateLimit": null,
                    "policyExpirationDate": null,
                    "isNotApplicable": true
                },
                {
                    "insuranceType": "WORKERS_COMPENSATION",
                    "carrier": null,
                    "perOccurrenceLimit": null,
                    "aggregateLimit": null,
                    "policyExpirationDate": null,
                    "isNotApplicable": true
                },
                {
                    "insuranceType": "GENERAL_LIABILITY",
                    "carrier": null,
                    "perOccurrenceLimit": null,
                    "aggregateLimit": null,
                    "policyExpirationDate": null,
                    "isNotApplicable": true
                },
                {
                    "insuranceType": "UMBRELLA_EXCESS",
                    "carrier": null,
                    "perOccurrenceLimit": null,
                    "aggregateLimit": null,
                    "policyExpirationDate": null,
                    "isNotApplicable": true
                }
            ],
            "experienceModificationRatings": [
                {
                    "year": 2023,
                    "experienceModificationRating": 0.0
                },
                {
                    "year": 2022,
                    "experienceModificationRating": 0.0
                },
                {
                    "year": 2021,
                    "experienceModificationRating": 0.0
                }
            ],
            "osha300Results": [
                {
                    "year": 2013,
                    "totalNumberDeathsBoxG": 0,
                    "totalNumberCasesDaysAwayBoxH": 0,
                    "totalNumberCasesRestrictionTransferBoxI": 0,
                    "otherRecordableCasesBoxJ": 0,
                    "totalHoursWorked": 0
                },
                {
                    "year": 2022,
                    "totalNumberDeathsBoxG": 0,
                    "totalNumberCasesDaysAwayBoxH": 0,
                    "totalNumberCasesRestrictionTransferBoxI": 0,
                    "otherRecordableCasesBoxJ": 0,
                    "totalHoursWorked": 0
                },
                {
                    "year": 2021,
                    "totalNumberDeathsBoxG": 0,
                    "totalNumberCasesDaysAwayBoxH": 0,
                    "totalNumberCasesRestrictionTransferBoxI": 0,
                    "otherRecordableCasesBoxJ": 0,
                    "totalHoursWorked": 0
                }
            ],
            "certificates": [],
            "unions": [],
            "annualVolumeRevenues": [
                {
                    "year": 2023,
                    "estimatedVolumeRevenue": 444444
                }
            ],
            "professionalLicenses": [],
            "companyOfficeAddresses": {
                "pagination": {
                    "cursorState": null,
                    "limit": 50,
                    "nextUrl": null,
                    "previousUrl": null
                },
                "results": [
                    {
                        "isMainOffice": true,
                        "address1": "5555 one two three road",
                        "address2": "",
                        "city": "kansas city",
                        "state": "Missouri",
                        "zipCode": "44444"
                    }
                ]
            },
            "customQuestions": {
                "pagination": {
                    "cursorState": null,
                    "limit": 50,
                    "nextUrl": null,
                    "previousUrl": null
                },
                "results": [
                    {
                        "question": "This is a test",
                        "section": "Financial",
                        "textResponse": null,
                        "numberResponse": null,
                        "booleanResponse": false
                    },
                    {
                        "question": "Test",
                        "section": "General",
                        "textResponse": null,
                        "numberResponse": null,
                        "booleanResponse": true
                    }
                ]
            }
        },
        {
            "id": "5430e7bc5cdc2e0300dd8b78",
            "uniqueId": null,
            "questionnaireVersion": "Primary Qualification",
            "qualification": {
                "status": "QUALIFIED",
                "internalSingleLimit": 900000,
                "internalTotalLimit": 1200000,
                "dateExpires": "2026-10-13T04:00:00.000Z",
                "summary": "Updates new limits. Good to go",
                "denialReason": null,
                "preExpirationStatus": null
            },
            "applicationStatus": "NOT_STARTED",
            "applicationDetail": "RENEWAL",
            "companyName": "j3",
            "yearFounded": 2017,
            "stateFounded": "Zacatecas",
            "taxIdType": "OTHER",
            "federalTaxId": "87HKH89879SD",
            "submissionCurrency": "USD",
            "numberOfHomeOfficeEmployees": 2,
            "numberOfFieldSupervisoryEmployees": 3,
            "hasProfessionalLicenses": false,
            "hasUnionAffiliations": false,
            "hasParentCompany": true,
            "parentCompanyName": "Autodesk",
            "currentEstimatedBacklog": 344599,
            "insuranceBrokerContactName": "Junie Frost",
            "insuranceBrokerCompanyName": "Ewing-Leavitt",
            "insuranceBrokerContactPhone": "2323333333",
            "insuranceBrokerContactEmail": "junie@gmail.com",
            "suretyBrokerAgencyCompanyName": "N/A",
            "suretyBrokerContactName": "N/A",
            "suretyBrokerContactPhone": "3333333333",
            "suretyCompanyName": "N/A",
            "suretySingleProjectBondingCapacity": null,
            "suretyAggregateBondingCapacity": null,
            "bankName": "0",
            "bankLineOfCreditTotal": 3000000,
            "bankLineOfCreditOutstanding": 100000,
            "bankContactName": "Ruby",
            "bankContactPhone": "2020202020",
            "bankContactEmail": "ruby@gmail.com",
            "dateSubmitted": "2024-02-08T18:05:16.682Z",
            "dateUpdated": "2024-03-07T16:37:53.186Z",
            "csiCodesForWorkPerformed": [
                {
                    "primaryCode": "00",
                    "secondaryCode": "10",
                    "tertiaryCode": "00",
                    "codeDescription": "Solicitation"
                },
                {
                    "primaryCode": "26",
                    "secondaryCode": "00",
                    "tertiaryCode": "00",
                    "codeDescription": "Electrical"
                }
            ],
            "regionsServed": [
                {
                    "region": "Other"
                },
                {
                    "region": "Alabama"
                },
                {
                    "region": "Alberta"
                },
                {
                    "region": "Alaska"
                },
                {
                    "region": "Zacatecas"
                },
                {
                    "region": "Veracruz"
                },
                {
                    "region": "Yucatán"
                },
                {
                    "region": "Tlaxcala"
                }
            ],
            "marketsServed": [
                {
                    "market": "Civic & Government"
                }
            ],
            "completedReferences": [
                {
                    "projectName": "Test additional Project",
                    "location": ", Yuc., Mexico",
                    "yearCompleted": 2000,
                    "value": 7,
                    "scope": "1",
                    "referenceContactCompany": "1",
                    "referenceContactName": "Nimesh Keswani",
                    "referenceContactPhone": "7323103991",
                    "referenceContactEmail": "nimesh.keswani@autodesk.com",
                    "isLargestProject": false
                },
                {
                    "projectName": "Recent",
                    "location": ", Yuc., Mexico",
                    "yearCompleted": 2023,
                    "value": 7,
                    "scope": "lightsabers",
                    "referenceContactCompany": "buildingconnected",
                    "referenceContactName": "bob the builder",
                    "referenceContactPhone": "1112223344",
                    "referenceContactEmail": "bobthebuilder@aol.com",
                    "isLargestProject": false
                },
                {
                    "projectName": "First!",
                    "location": "97050 Mérida, Yuc., Mexico",
                    "yearCompleted": 2019,
                    "value": 7,
                    "scope": "asdf",
                    "referenceContactCompany": "asdf",
                    "referenceContactName": "adsf",
                    "referenceContactPhone": "1231231234",
                    "referenceContactEmail": "asdf2@afs.com",
                    "isLargestProject": false
                },
                {
                    "projectName": "Big",
                    "location": "97050 Mérida, Yuc., Mexico",
                    "yearCompleted": 2020,
                    "value": 7,
                    "scope": "asdf",
                    "referenceContactCompany": "asdf",
                    "referenceContactName": "asdf",
                    "referenceContactPhone": "1231231234",
                    "referenceContactEmail": "asdf@sdf.com",
                    "isLargestProject": false
                },
                {
                    "projectName": "Manhattan Building",
                    "location": "New York, NY 10001, United States of America",
                    "yearCompleted": 2020,
                    "value": 1200000,
                    "scope": "test",
                    "referenceContactCompany": "Johnny",
                    "referenceContactName": "Builder",
                    "referenceContactPhone": "1914444444",
                    "referenceContactEmail": "buildingconnected@gmail.com",
                    "isLargestProject": false
                },
                {
                    "projectName": "Manhattan Building",
                    "location": "New York, NY 10001, United States of America",
                    "yearCompleted": 2020,
                    "value": 1200000,
                    "scope": "test",
                    "referenceContactCompany": "hello",
                    "referenceContactName": "dgesfa",
                    "referenceContactPhone": "1914444444",
                    "referenceContactEmail": "kelly.ngai@autodesk.com",
                    "isLargestProject": true
                }
            ],
            "companyContacts": [
                {
                    "positionTitle": "b",
                    "contactName": "a",
                    "contactPhone": "6143139341",
                    "contactEmail": "adam.j.page@autodesk.com",
                    "contactFax": null,
                    "contactType": "PREQUAL"
                },
                {
                    "positionTitle": "Product Estimator",
                    "contactName": "Miles Sandman",
                    "contactPhone": "9191111111",
                    "contactEmail": "b@tradetapp.com",
                    "contactFax": "8184387838",
                    "contactType": "COMPANY"
                }
            ],
            "insuranceCoverages": [
                {
                    "insuranceType": "UMBRELLA_EXCESS",
                    "carrier": "21st Century Assurance Company",
                    "perOccurrenceLimit": null,
                    "aggregateLimit": null,
                    "policyExpirationDate": "2024-12-20",
                    "isNotApplicable": false
                },
                {
                    "insuranceType": "AUTOMOBILE_LIABILITY",
                    "carrier": "21st Century Advantage Insurance Company",
                    "perOccurrenceLimit": null,
                    "aggregateLimit": null,
                    "policyExpirationDate": "2024-12-06",
                    "isNotApplicable": false
                },
                {
                    "insuranceType": "GENERAL_LIABILITY",
                    "carrier": null,
                    "perOccurrenceLimit": null,
                    "aggregateLimit": null,
                    "policyExpirationDate": null,
                    "isNotApplicable": true
                },
                {
                    "insuranceType": "WORKERS_COMPENSATION",
                    "carrier": null,
                    "perOccurrenceLimit": null,
                    "aggregateLimit": null,
                    "policyExpirationDate": null,
                    "isNotApplicable": true
                }
            ],
            "experienceModificationRatings": [
                {
                    "year": 2020,
                    "experienceModificationRating": 0.0
                },
                {
                    "year": 2021,
                    "experienceModificationRating": 2.0
                },
                {
                    "year": 2022,
                    "experienceModificationRating": 0.91
                },
                {
                    "year": 2023,
                    "experienceModificationRating": 0.9
                },
                {
                    "year": 2024,
                    "experienceModificationRating": 0.0
                }
            ],
            "osha300Results": [
                {
                    "year": 2018,
                    "totalNumberDeathsBoxG": 0,
                    "totalNumberCasesDaysAwayBoxH": 0,
                    "totalNumberCasesRestrictionTransferBoxI": 0,
                    "otherRecordableCasesBoxJ": 0,
                    "totalHoursWorked": 0
                },
                {
                    "year": 2019,
                    "totalNumberDeathsBoxG": 0,
                    "totalNumberCasesDaysAwayBoxH": 0,
                    "totalNumberCasesRestrictionTransferBoxI": 0,
                    "otherRecordableCasesBoxJ": 0,
                    "totalHoursWorked": 0
                },
                {
                    "year": 2020,
                    "totalNumberDeathsBoxG": 2,
                    "totalNumberCasesDaysAwayBoxH": 13,
                    "totalNumberCasesRestrictionTransferBoxI": 0,
                    "otherRecordableCasesBoxJ": 3,
                    "totalHoursWorked": 25
                },
                {
                    "year": 2021,
                    "totalNumberDeathsBoxG": 0,
                    "totalNumberCasesDaysAwayBoxH": 0,
                    "totalNumberCasesRestrictionTransferBoxI": 0,
                    "otherRecordableCasesBoxJ": 0,
                    "totalHoursWorked": 10000
                },
                {
                    "year": 2022,
                    "totalNumberDeathsBoxG": 0,
                    "totalNumberCasesDaysAwayBoxH": 0,
                    "totalNumberCasesRestrictionTransferBoxI": 0,
                    "otherRecordableCasesBoxJ": 0,
                    "totalHoursWorked": 0
                }
            ],
            "certificates": [
                {
                    "id": "64e4e1f993f6540a351c36e4",
                    "type": {
                        "id": "6233ba2091bc5b006136b87c",
                        "name": "GSA Schedule"
                    },
                    "agency": {
                        "id": "6233ba2091bc5b006136b891",
                        "name": "Alabama Unified Certification Program",
                        "website": "https://www.dot.state.al.us/conweb/DBEProgram.html"
                    },
                    "number": "12345",
                    "expiresAt": "2023-08-03T04:00:00.000Z",
                    "fileName": "Screenshot 2024-03-07 at 2.00.38 PM.png"
                },
                {
                    "id": "64ff2eb17a15d500509f7ffb",
                    "type": {
                        "id": "62f1452b8a07300080679c64",
                        "name": "Minority Women-Owned Business Enterprise (M/WBE)"
                    },
                    "agency": {
                        "id": "6233ba2091bc5b006136b878",
                        "name": "United States Department of Transportation",
                        "website": "https://www.transportation.gov/civil-rights/disadvantaged-business-enterprise"
                    },
                    "number": "2468",
                    "expiresAt": "2023-09-18T19:00:00.000Z",
                    "fileName": null
                }
            ],
            "unions": [],
            "annualVolumeRevenues": [
                {
                    "year": 2021,
                    "estimatedVolumeRevenue": 1332
                },
                {
                    "year": 2023,
                    "estimatedVolumeRevenue": 1332
                }
            ],
            "professionalLicenses": [],
            "companyOfficeAddresses": {
                "pagination": {
                    "cursorState": null,
                    "limit": 50,
                    "nextUrl": null,
                    "previousUrl": null
                },
                "results": [
                    {
                        "isMainOffice": true,
                        "address1": "1234 Test St",
                        "address2": "",
                        "city": "San Francisco",
                        "state": "Zacatecas",
                        "zipCode": "23423"
                    }
                ]
            },
            "customQuestions": {
                "pagination": {
                    "cursorState": null,
                    "limit": 50,
                    "nextUrl": null,
                    "previousUrl": null
                },
                "results": [
                    {
                        "question": "This is a test",
                        "section": "Financial",
                        "textResponse": null,
                        "numberResponse": null,
                        "booleanResponse": true
                    },
                    {
                        "question": "Yes/No Detail Test",
                        "section": "Financial",
                        "textResponse": "NA",
                        "numberResponse": null,
                        "booleanResponse": true
                    },
                    {
                        "question": "Test",
                        "section": "General",
                        "textResponse": null,
                        "numberResponse": null,
                        "booleanResponse": true
                    }
                ]
            }
        }
    ]
}



try {
    const resp = await fetch('/api/auth/profile');
    if (resp.ok) {
        const user = await resp.json();
        login.innerText = `Logout (${user.name})`;
        login.onclick = () => {
            const iframe = document.createElement('iframe');
            iframe.style.visibility = 'hidden';
            iframe.src = 'https://accounts.autodesk.com/Authentication/LogOut';
            document.body.appendChild(iframe);
            iframe.onload = () => {
                window.location.replace('/api/auth/logout');
                document.body.removeChild(iframe);
            };
        }
        console.log("login_ok")
        document.getElementById("preview").style.display = "block";
        document.getElementById("welcome").style.display = "none";
        fetch("http://localhost:8080/api/tradetapp/financials")
            .then(data => data.json())
            .then(data => createFinancialOverview(data))
        // fetch("http://localhost:8080/api/tradetapp/qualifications")
        //     .then(data => data.json())
        //     .then(data => createQualificationOverview(data))
        createQualificationOverview(QUALIF_SAMPLE_DATA)

    } else {
        login.innerText = 'Login';
        login.onclick = () => window.location.replace('/api/auth/login');
    }
    login.style.visibility = 'visible';
} catch (err) {
    alert('Could not initialize the application. See console for more details.');
    console.error(err);
}

function createFinancialOverview(data){
    let financial_overview = document.getElementById("financial_overview");
    data["results"].forEach(company => {
        let item = document.createElement("div");
        item.className = "carousel-item";
        item.appendChild(createFinancialItem(company));
        financial_overview.appendChild(item);
    })
    financial_overview.children[0].className += " active";
}

function createFinancialItem(data){
    const table_holder = document.createElement("div");
    table_holder.className="table_holder";
    const title = document.createElement("h3");
    title.innerText = data["companyName"];
    table_holder.appendChild(title);
    const info_table = document.createElement("table");
    info_table.className = "table";
    info_table.innerHTML = `
    <thead>
        <tr>
            <th scope="col">id</th>
            <th scope="col">Parent Company Name</th>
            <th scope="col">Risk Evaluation Score</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${data["id"]}</td>
            <td>${data["parentCompanyName"]}</td>
            <td>${data["riskEvaluationScore"]}</td>
        </tr>
    </tbody>
    `
    table_holder.appendChild(info_table);
    table_holder.appendChild(createInfoHolder(data));
    table_holder.appendChild(createStatementHolder(data["statements"]))

    return table_holder;
}


function createInfoHolder(data){
    const info_holder = document.createElement("div");
    info_holder.className = "info_holder";
    const benchmark_holder = document.createElement("div")
    benchmark_holder.className = "benchmark_holder";
    benchmark_holder.appendChild(creatBenchmarkTable(data["benchmarks"]));
    info_holder.appendChild(benchmark_holder);

    const metrics_holder = document.createElement("div")
    metrics_holder.className = "metrics_holder";
    metrics_holder.appendChild(creatMetricsTable(data["keyMetrics"]));
    info_holder.appendChild(metrics_holder);


    return info_holder;

}


function creatBenchmarkTable(data) {
    const table = document.createElement("table");
    table.className = "table table-striped"
    table.innerHTML = `
    <tbody>
        <tr>
            <th scope="row">Overall Benchmarking Score</th>
            <td>${data["overallBenchmarkingScore"]}</td>
        </tr>
        <tr>
            <th scope="row">Overall Benchmarking Year</th>
            <td>${data["overallBenchmarkingYear"]}</td>
        </tr>
        <tr>
            <th scope="row">Debt Score</th>
            <td>${data["debtScore"]}</td>
        </tr>
        <tr>
            <th scope="row">Debt Year</th>
            <td>${data["debtYear"]}</td>
        </tr>
        <tr>
            <th scope="row">Liquidity Score</th>
            <td>${data["liquidityScore"]}</td>
        </tr>
        <tr>
            <th scope="row">Liquidity Year</th>
            <td>${data["liquidityYear"]}</td>
        </tr>
        <tr>
            <th scope="row">Profitability Score</th>
            <td>${data["profitabilityScore"]}</td>
        </tr>
        <tr>
            <th scope="row">Profitability Year</th>
            <td>${data["profitabilityYear"]}</td>
        </tr>
        <tr>
            <th scope="row">Turnover Score</th>
            <td>${data["turnoverScore"]}</td>
        </tr>
        <tr>
            <th scope="row">Turnover Year</th>
            <td>${data["turnoverYear"]}</td>
        </tr>
        </tr>
    </tbody>
    `
    return table;
}


function creatMetricsTable(data) {
    const table = document.createElement("table");
    table.className = "table table-striped"
    table.innerHTML = `
    <tbody>
        <tr>
            <th scope="row">Aggregate Total Capacity</th>
            <td>${data["aggregateTotalCapacity"]}</td>
        </tr>
        <tr>
            <th scope="row">Largest Project Year</th>
            <td>${data["largestProject"]}</td>
        </tr>
        <tr>
            <th scope="row">Largest Project Year</th>
            <td>${data["largestProjectYear"]}</td>
        </tr>
        <tr>
            <th scope="row">Net Cash Flow</th>
            <td>${data["netCashFlow"]}</td>
        </tr>
        <tr>
            <th scope="row">Net Cash Flow Year</th>
            <td>${data["netCashFlowYear"]}</td>
        </tr>
        <tr>
            <th scope="row">Single Project Capacity</th>
            <td>${data["singleProjectCapacity"]}</td>
        </tr>
        <tr>
            <th scope="row">Working Capital</th>
            <td>${data["workingCapital"]}</td>
        </tr>
        <tr>
            <th scope="row">Working Capital Year</th>
            <td>${data["workingCapitalYear"]}</td>
        </tr>
       
    </tbody>
    `
    return table;
}


function createStatementHolder(statements){
    const statement_holder = document.createElement("div");
    statement_holder.className="statement_holder";
    const title = document.createElement("h2");
    title.innerText = "Statements";
    title.className = "text-center";
    statement_holder.appendChild(title);
    const info_holder = document.createElement("div");
    info_holder.className="info_holder";
    statements.forEach(statement => {
        const data = {...statement["rawData"], ...statement["metrics"],date:statement["date"]}
        info_holder.appendChild(createStatementInfo(data))
    });
    statement_holder.appendChild(info_holder);
    const spacer = document.createElement("div");
    spacer.className="spacer";
    statement_holder.appendChild(spacer);
    return statement_holder;
}

function createStatementInfo(data) {

    const statement_info = document.createElement("div");
    statement_info.className = "statement_info";
    const table = document.createElement("table");
    table.className = "table table-striped"
    table.innerHTML = `
    <tbody>
        <tr>
            <th scope="row">Date</th>
            <td>${data["date"]}</td>
        </tr>
        <tr>
            <th scope="row">Account Payable</th>
            <td>${data["accountsPayable"]}</td>
        </tr>
        <tr>
            <th scope="row">Account Receivable</th>
            <td>${data["accountsReceivable"]}</td>
        </tr>
        <tr>
            <th scope="row">Amount of Credit Used</th>
            <td>${data["amountOfCreditUsed"]}</td>
        </tr>
        <tr>
            <th scope="row">Billing in Excess of Cost</th>
            <td>${data["billingInExcessOfCost"]}</td>
        </tr>
        <tr>
            <th scope="row">Cash and Cash Equivalents</th>
            <td>${data["cashAndCashEquivalents"]}</td>
        </tr>
        <tr>
            <th scope="row">Cost in Excess of Billings</th>
            <td>${data["costInExcessOfBillings"]}</td>
        </tr>
        <tr>
            <th scope="row">Costs of Goods Sold</th>
            <td>${data["costsOfGoodsSold"]}</td>
        </tr>
        <tr>
            <th scope="row">Current Liabilities</th>
            <td>${data["currentLiabilities"]}</td>
        </tr>
        <tr>
            <th scope="row">Earnings before Income Taxes</th>
            <td>${data["earningsBeforeIncomeTaxes"]}</td>
        </tr>
        <tr>
            <th scope="row">Equity</th>
            <td>${data["equity"]}</td>
        </tr>
        <tr>
            <th scope="row">Interest Expense</th>
            <td>${data["interestExpense"]}</td>
        </tr>
        <tr>
            <th scope="row">Interest Income</th>
            <td>${data["interestIncome"]}</td>
        </tr>
        <tr>
            <th scope="row">Marketable Securities</th>
            <td>${data["marketableSecurities"]}</td>
        </tr>
        <tr>
            <th scope="row">Net Cash From Financing</th>
            <td>${data["netCashFromFinancing"]}</td>
        </tr>
        <tr>
            <th scope="row">Net Cash From Investments</th>
            <td>${data["netCashFromInvestments"]}</td>
        </tr>
        <tr>
            <th scope="row">Net Cash From Operations</th>
            <td>${data["netCashFromOperations"]}</td>
        </tr>
        <tr>
            <th scope="row">Net Income</th>
            <td>${data["netIncome"]}</td>
        </tr>
        <tr>
            <th scope="row">Revenue Sales</th>
            <td>${data["revenueSales"]}</td>
        </tr>
        <tr>
            <th scope="row">Total Assets</th>
            <td>${data["totalAssets"]}</td>
        </tr>
        <tr>
            <th scope="row">Current Assets</th>
            <td>${data["currentAssets"]}</td>
        </tr>
        <tr>
            <th scope="row">Total Liabilities</th>
            <td>${data["totalLiabilities"]}</td>
        </tr>
        <tr>
            <th scope="row">Total Line Of Credit</th>
            <td>${data["totalLineOfCredit"]}</td>
        </tr>
        <tr>
            <th scope="row">Accounts Receivable Turnover</th>
            <td>${data["accountsReceivableTurnover"]}</td>
        </tr>
        <tr>
            <th scope="row">Asset Turnover Ratio</th>
            <td>${data["assetTurnoverRatio"]}</td>
        </tr>
        <tr>
            <th scope="row">Cash To Overbillings</th>
            <td>${data["cashToOverbillings"]}</td>
        </tr>
        <tr>
            <th scope="row">Current Ratio</th>
            <td>${data["currentRatio"]}</td>
        </tr>
        <tr>
            <th scope="row">Days Of Cash On Hand</th>
            <td>${data["daysOfCashOnHand"]}</td>
        </tr>
        <tr>
            <th scope="row">Debt Less Cash To Equity</th>
            <td>${data["debtLessCashToEquity"]}</td>
        </tr>
        <tr>
            <th scope="row">Debt Ratio</th>
            <td>${data["debtRatio"]}</td>
        </tr>
        <tr>
            <th scope="row">Equity To Total Liabilities</th>
            <td>${data["equityToTotalLiabilities"]}</td>
        </tr>
        <tr>
            <th scope="row">Debt To Equity</th>
            <td>${data["debtToEquity"]}</td>
        </tr>
        <tr>
            <th scope="row">Gross Profit Margin</th>
            <td>${data["grossProfitMargin"]}</td>
        </tr>
        <tr>
            <th scope="row">Underbillings To Current Assets</th>
            <td>${data["underbillingsToCurrentAssets"]}</td>
        </tr>
        <tr>
            <th scope="row">Net Profit Margin</th>
            <td>${data["netProfitMargin"]}</td>
        </tr>
        <tr>
            <th scope="row">Quick Ratio</th>
            <td>${data["quickRatio"]}</td>
        </tr>
        <tr>
            <th scope="row">Return On Assets</th>
            <td>${data["returnOnAssets"]}</td>
        </tr>
        <tr>
            <th scope="row">Equity To Sales</th>
            <td>${data["equityToSales"]}</td>
        </tr>
        <tr>
            <th scope="row">Working Capital To Sales</th>
            <td>${data["workingCapitalToSales"]}</td>
        </tr>
        <tr>
            <th scope="row">Underbillings To Wc</th>
            <td>${data["underbillingsToWc"]}</td>
        </tr>
        <tr>
            <th scope="row">Working Capital Compression</th>
            <td>${data["workingCapitalCompression"]}</td>
        </tr>
        <tr>
            <th scope="row">Working Capital Turnover</th>
            <td>${data["workingCapitalTurnover"]}</td>
        </tr>
        
    </tbody>
    `
    statement_info.appendChild(table);
    return statement_info;
}




/*Qualification*/

function createQualificationOverview(data){
    let financial_overview = document.getElementById("qualification_overview");
    data["results"].forEach(company => {
        let item = document.createElement("div");
        item.className = "carousel-item";
        item.appendChild(createQualificationItem(company));
        financial_overview.appendChild(item);
    })
    financial_overview.children[0].className += " active";
}

function createCompanyInfoTable(data) {
    const table_holder = document.createElement("div");
    table_holder.className="table_holder";
    const title = document.createElement("h3");
    title.innerText = "Company details";
    title.className = "text-center";

    table_holder.appendChild(title);

    const table = document.createElement("table");
    table.className = "table table-striped"
    table.innerHTML = `
    <tbody>
        <tr>
            <th scope="row">Company Name</th>
            <td>${data["companyName"]}</td>
        </tr>
        <tr>
            <th scope="row">Year Founderd</th>
            <td>${data["yearFounded"]}</td>
        </tr>
        <tr>
            <th scope="row">State Founded</th>
            <td>${data["stateFounded"]}</td>
        </tr>
        <tr>
            <th scope="row">Tax ID Type</th>
            <td>${data["taxIdType"]}</td>
        </tr>
        <tr>
            <th scope="row">Federal Tax ID</th>
            <td>${data["federalTaxId"]}</td>
        </tr>
        <tr>
            <th scope="row">Number of HO employees</th>
            <td>${data["numberOfHomeOfficeEmployees"]}</td>
        </tr>
        <tr>
            <th scope="row">Number of field employees</th>
            <td>${data["numberOfFieldSupervisoryEmployees"]}</td>
        </tr>
        
        <tr>
            <th scope="row"></th>
            <td></td>
        </tr>
        
        <tr>
            <th scope="row">Bank Name</th>
            <td>${data["bankName"]}</td>
        </tr>
        <tr>
            <th scope="row">Bank contact name</th>
            <td>${data["bankContactName"]}</td>
        </tr>
        <tr>
            <th scope="row">Bank contact phone</th>
            <td>${data["bankContactPhone"]}</td>
        </tr>
        <tr>
            <th scope="row">Bank contact email</th>
            <td>${data["bankContactEmail"]}</td>
        </tr>
        <tr>
            <th scope="row">Bank line of credit total</th>
            <td>${data["bankLineOfCreditTotal"]}</td>
        </tr>
        <tr>
            <th scope="row">Bank line of credit outstanding</th>
            <td>${data["bankLineOfCreditOutstanding"]}</td>
        </tr>
        <tr>
            <th scope="row"></th>
            <td></td>
        </tr>
        <tr>
            <th scope="row">Date submitted</th>
            <td>${new Date(data["dateSubmitted"]).toDateString()}</td>
        </tr>
        <tr>
            <th scope="row">Date updated</th>
            <td>${new Date(data["dateUpdated"]).toDateString()}</td>
        </tr>
       
    </tbody>
    `
    table_holder.appendChild(table);
    return table_holder;
}

function createQualifStatusTable(data) {
    const table_holder = document.createElement("div");
    table_holder.className="table_holder";
    const title = document.createElement("h3");
    title.innerText = "Qualification details";
    title.className = "text-center";

    table_holder.appendChild(title);

    const table = document.createElement("table");
    table.className = "table table-striped"
    table.innerHTML = `
    <tbody>
        <tr>
            <th scope="row">Status</th>
            <td>${data["status"]}</td>
        </tr>
        <tr>
            <th scope="row">Summary</th>
            <td>${data["summary"]}</td>
        </tr>
        <tr>
            <th scope="row">Internal Single Limit</th>
            <td>${data["internalSingleLimit"]}</td>
        </tr>
        <tr>
            <th scope="row">Internal Total Limit</th>
            <td>${data["internalTotalLimit"]}</td>
        </tr>
        <tr>
            <th scope="row">Expiration Date</th>
            <td>${new Date(data["dateExpires"]).toDateString()}</td>
        </tr>
       
    </tbody>
    `
    table_holder.appendChild(table);
    return table_holder;
}

function createReferenceTable(input) {
    const table_holder = document.createElement("div");
    table_holder.className="table_holder";
    const title = document.createElement("h3");
    title.innerText = "Completed References";
    title.className = "text-center";
    table_holder.appendChild(title);

    const carusel = document.createElement("div");
    carusel.className = "carousel carousel-dark slide";
    carusel.id = "ref_carusel";
    const carusel_inner = document.createElement("div");
    carusel_inner.className = "carousel-inner";
    carusel.appendChild(carusel_inner);

    const button_prev = document.createElement("button");
    button_prev.className="carousel-control-prev";
    button_prev.type="button";
    button_prev.setAttribute("data-bs-target", "#ref_carusel");
    button_prev.setAttribute("data-bs-slide", "prev");
    button_prev.innerHTML=`<span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>`

    const button_next = document.createElement("button");
    button_next.className="carousel-control-next";
    button_next.type="button";
    button_next.setAttribute("data-bs-target", "#ref_carusel");
    button_next.setAttribute("data-bs-slide", "next");
    button_next.innerHTML=`<span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>`

    carusel.appendChild(button_prev);
    carusel.appendChild(button_next)

    input.forEach(data => {
        let item = document.createElement("div");
        item.className = "carousel-item";
        const table = document.createElement("table");
        table.className = "table table-striped"
        table.innerHTML = `
        <tbody>
            <tr>
                <th scope="row">Project Name</th>
                <td>${data["projectName"]}</td>
            </tr>
            <tr>
                <th scope="row">Location</th>
                <td>${data["location"]}</td>
            </tr>
            <tr>
                <th scope="row">Year completed</th>
                <td>${data["yearCompleted"]}</td>
            </tr>
            <tr>
                <th scope="row">Value</th>
                <td>${data["value"]}</td>
            </tr>
            <tr>
                <th scope="row">Scope</th>
                <td>${data["scope"]}</td>
            </tr>
            <tr>
                <th scope="row">Reference Contact Company</th>
                <td>${data["referenceContactCompany"]}</td>
            </tr>
            <tr>
                <th scope="row">Reference Contact Name</th>
                <td>${data["referenceContactName"]}</td>
            </tr>
            <tr>
                <th scope="row">Reference Contact Phone</th>
                <td>${data["referenceContactPhone"]}</td>
            </tr>
            <tr>
                <th scope="row">Reference Contact Email</th>
                <td>${data["referenceContactEmail"]}</td>
            </tr>
             <tr>
                <th scope="row">Is largest project</th>
                <td>${data["isLargestProject"]}</td>
            </tr>

        </tbody>
        `
        item.appendChild(table);

        carusel_inner.appendChild(item);
    })

    carusel_inner.children[0].className += " active"
    table_holder.appendChild(carusel);
    return table_holder;
}
function createQualificationItem(data){
    const table_holder = document.createElement("div");
    table_holder.className="table_holder";
    const title = document.createElement("h3");
    title.innerText = data["companyName"];
    table_holder.appendChild(title);
    const info_table = document.createElement("table");
    info_table.className = "table";
    info_table.innerHTML = `
    <thead>
        <tr>
            <th scope="col">id</th>
            <th scope="col">Application Status</th>
            <th scope="col">Application Detail</th>
            <th scope="col">Questionnaire Version</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${data["id"]}</td>
            <td>${data["applicationStatus"]}</td>
            <td>${data["applicationDetail"]}</td>
            <td>${data["questionnaireVersion"]}</td>
        </tr>
    </tbody>
    `
    table_holder.appendChild(info_table);
    table_holder.appendChild(createQualifStatusTable(data["qualification"]));
    table_holder.appendChild(createCompanyInfoTable(data));
    table_holder.appendChild(createReferenceTable(data["completedReferences"]));
    // table_holder.appendChild(createInfoHolder(data));
    // table_holder.appendChild(createStatementHolder(data["statements"]))
    const spacer = document.createElement("div");
    spacer.className="spacer";
    table_holder.appendChild(spacer);
    return table_holder;
}