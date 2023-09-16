import Chart from 'react-apexcharts'
import styles from './styles.module.css'

const OptionsChartLine = {
    colors: ['#00b4f1'],
    tooltip: {
        enable: true,
        theme: 'dark',
    },
    grid: {
        show: false,
    },
    plotOptions: {
        bar: {
            borderRadius: 8,
        },
        line: {
            curve: 'smooth',
        }
    }
}

const SeriesChartLine = [{
    name: 'primeiro',
    data: [10, 2, 30, 4, 50, 60, 7, 8, 90]
}]

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
                    options={OptionsChartLine}
                    series={SeriesChartLine}
                    type='bar'
                    width='100%'
                    height='100%'
                />
            </section>

            <section className={styles.section_wrapper_grid_6}>
                <Chart
                    options={OptionsChartLine}
                    series={SeriesChartLine}
                    type='bar'
                    width='100%'
                    height='100%'
                />
            </section>

            <section className={styles.section_wrapper_grid_7}>
                <Chart
                    options={OptionsChartLine}
                    series={SeriesChartLine}
                    type='line'
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
                    options={OptionsChartLine}
                    series={SeriesChartLine}
                    type='line'
                    width='100%'
                    height='100%'
                />
            </section>
        </>
    )
}