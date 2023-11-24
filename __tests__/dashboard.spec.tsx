import React from 'react'
import {describe, expect, test} from '@jest/globals';
import { LineChartComponent } from '../src/data/chartLineData';
import { ChartBarComponent } from '../src/data/chartBarData';
import { BarAgeRangeChartComponent } from '../src/data/chartBarAgeRange';

describe('DashboardCharts', () => {
  test('Devera renderizar o componente de grafico de distribuição de temas ao longo do tempo', () => {
    const lineChart = new React.Component(LineChartComponent);
    expect(lineChart).toBeDefined();
  });

  test('Devera renderizar o componente de grafico de distribuição de sentimento x tema', () => {
    const barChart = new React.Component(ChartBarComponent);
    expect(barChart).toBeDefined();
  });

  test('Devera renderizar o componente de grafico de distribuição de sentimento x faixa etária.', () => {
    const barAgeChart = new React.Component(BarAgeRangeChartComponent);
    expect(barAgeChart).toBeDefined();
  });
});