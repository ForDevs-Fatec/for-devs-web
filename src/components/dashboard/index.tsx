import Chart from 'react-apexcharts'
import styles from './styles.module.css'

/*Line chart data*/
const OptionsChartLine: ApexCharts.ApexOptions = {
    chart: {
        type: "line",
    },
    stroke: {
        curve: 'smooth',
    },
    tooltip: {
        theme: 'dark'
    },
    grid: {
        borderColor: "#535A6C",
    },
    series: [
        {
            name: "Sales",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }
    ],
    xaxis: {
        categories: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
};

const SeriesChartLine = [
    {
        name: "Sales",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }
];

/*Bar chart data*/
const OptionsChartBar: ApexCharts.ApexOptions = {
    chart: {
        type: 'bar'
    },
    plotOptions: {
        bar: {
            horizontal: false
        }
    },
    tooltip: {
        theme: 'dark'
    },
    series: [{
        data: [{
            x: 'category A',
            y: 10
        }, {
            x: 'category B',
            y: 18
        }, {
            x: 'category C',
            y: 13
        }]
    }]
};

/*Pie chart data*/
const OptionsChartPie: ApexCharts.ApexOptions = {
    chart: {
        type: 'pie',
    },
    tooltip: {
        theme: 'dark'
    },
    legend: {
        labels: {
            colors: '#fff'
        }
    },
    labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
}

const SeriesChartPie = [30, 40, 35, 50, 49, 60, 70, 91, 125]

/*Scatter chart data*/
const OptionsChartScatter: ApexCharts.ApexOptions = {
    chart: {
        type: 'scatter',
    },
    tooltip: {
        theme: 'dark'
    },
    labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Banana', 'Pineapple', 'Kiwi', 'Strawberry', 'Cherry'],
}

const SeriesChartScatter = [30, 40, 35, 50, 49, 60, 70, 91, 125]

export function DashboardCharts() {
    return (
        <>
            <section className={styles.section_wrapper_grid_1}>
                <Chart
                    options={OptionsChartLine}
                    series={SeriesChartLine}
                    type='line'
                    width='100%'
                    height='100%'
                />
            </section>

            <section className={styles.section_wrapper_grid_2}>
                <Chart
                    options={OptionsChartLine}
                    series={SeriesChartLine}
                    type='line'
                    width='100%'
                    height='100%'
                />
            </section>

            <section className={styles.section_wrapper_grid_3}>
                <Chart
                    options={OptionsChartLine}
                    series={SeriesChartLine}
                    type='line'
                    width='100%'
                    height='100%'
                />
            </section>

            <section className={styles.section_wrapper_grid_4}>
                <Chart
                    options={OptionsChartLine}
                    series={SeriesChartLine}
                    type='line'
                    width='100%'
                    height='100%'
                />
            </section>

            <section className={styles.section_wrapper_grid_5}>
                <Chart
                    options={OptionsChartBar}
                    series={SeriesChartLine}
                    type='bar'
                    width='100%'
                    height='100%'
                />
            </section>

            <section className={styles.section_wrapper_grid_6}>
                <Chart
                    options={OptionsChartBar}
                    series={SeriesChartLine}
                    type='bar'
                    width='100%'
                    height='100%'
                />
            </section>

            <section className={styles.section_wrapper_grid_7}>
                <Chart
                    options={OptionsChartPie}
                    series={SeriesChartPie}
                    type='pie'
                    width='100%'
                    height='100%'
                />
            </section>

            <section className={styles.section_wrapper_grid_8}>
                <Chart
                    options={OptionsChartLine}
                    series={SeriesChartLine}
                    type='line'
                    width='100%'
                    height='100%'
                />
            </section>

            <section className={styles.section_wrapper_grid_9}>
                <Chart
                    options={OptionsChartScatter}
                    series={SeriesChartLine}
                    type='scatter'
                    width='100%'
                    height='100%'
                />
            </section>
        </>
    )
}