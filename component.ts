import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-root',
  template: `
    <div style="display: flex; justify-content: space-around;">
      <div style="width: 30%;">
        <h3>Le nombre des utilisateurs</h3>
        <canvas baseChart
                [datasets]="barChartData"
                [labels]="barChartLabels"
                [options]="barChartOptions"
                [legend]="barChartLegend"
                [chartType]="barChartType">
        </canvas>
      </div>
      <div style="width: 30%;">
        <h3>Le nombre des utilisateurs/Jours</h3>
        <canvas baseChart
                [data]="pieChartData"
                [labels]="pieChartLabels"
                [chartType]="pieChartType">
        </canvas>
      </div>
      <div style="width: 30%;">
        <h3>Le nombre des utilisateurs/Mois</h3>
        <canvas baseChart
                [datasets]="lineChartData"
                [labels]="lineChartLabels"
                [options]="lineChartOptions"
                [legend]="lineChartLegend"
                [chartType]="lineChartType">
        </canvas>
      </div>
    </div>
  `
})
export class AppComponent {
  // Bar Chart
  barChartOptions = {
    responsive: true,
  };
  barChartLabels = ['Label 1', 'Label 2', 'Label 3'];
  barChartType = 'bar';
  barChartLegend = true;
  barChartData = [
    { data: [65, 59, 80], label: 'Series A' },
    { data: [28, 48, 40], label: 'Series B' }
  ];

  // Pie Chart
  pieChartLabels = ['Part 1', 'Part 2', 'Part 3'];
  pieChartData = [300, 500, 100];
  pieChartType = 'pie';

  // Line Chart
  lineChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];
  lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  lineChartOptions = {
    responsive: true,
  };
  lineChartLegend = true;
  lineChartType = 'line';
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgChartsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
