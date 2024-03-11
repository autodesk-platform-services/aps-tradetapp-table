const login = document.getElementById('login');
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
        fetch("http://localhost:8080/api/tradetapp/financials")
            .then(data => data.json())
            .then(data => createFinancialOverview(data))

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

