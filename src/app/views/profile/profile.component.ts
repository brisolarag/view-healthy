import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { DataUsersService } from '../../services/data/data-users.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'exercise_level', 'weigth', 'bmr', 'median_kcal_lose', 'recommended_kcal_eat', 'macros', 'created_at'];
  dataSource = new MatTableDataSource<Diet>(MOCK_DIETS);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  user:any = {};


  constructor(private dataUserService: DataUsersService) {}


  ngOnInit(): void {
    this.dataUserService.populateUserLocalStorage(this.user);
  }

  
  
}

export interface Diet {
  id: string,
  exerciseLevel: number,
  weigth: number,
  bmr: number,
  medianKcalLose:number,
  recomendedKcalToEat:number
}

export const MOCK_DIETS: Diet[] = [
  { id: '1', exerciseLevel: 3, weigth: 70, bmr: 1600, medianKcalLose: 500, recomendedKcalToEat: 2100 },
  { id: '2', exerciseLevel: 2, weigth: 80, bmr: 1800, medianKcalLose: 400, recomendedKcalToEat: 2200 },
  { id: '3', exerciseLevel: 4, weigth: 65, bmr: 1500, medianKcalLose: 600, recomendedKcalToEat: 2000 },
  { id: '4', exerciseLevel: 1, weigth: 90, bmr: 1900, medianKcalLose: 300, recomendedKcalToEat: 2500 },
  { id: '5', exerciseLevel: 5, weigth: 75, bmr: 1700, medianKcalLose: 700, recomendedKcalToEat: 2300 },
  { id: '5', exerciseLevel: 5, weigth: 75, bmr: 1700, medianKcalLose: 700, recomendedKcalToEat: 2300 },
  { id: '5', exerciseLevel: 5, weigth: 75, bmr: 1700, medianKcalLose: 700, recomendedKcalToEat: 2300 },
  { id: '5', exerciseLevel: 5, weigth: 75, bmr: 1700, medianKcalLose: 700, recomendedKcalToEat: 2300 },
  { id: '5', exerciseLevel: 5, weigth: 75, bmr: 1700, medianKcalLose: 700, recomendedKcalToEat: 2300 },
  { id: '5', exerciseLevel: 5, weigth: 75, bmr: 1700, medianKcalLose: 700, recomendedKcalToEat: 2300 },
  { id: '5', exerciseLevel: 5, weigth: 75, bmr: 1700, medianKcalLose: 700, recomendedKcalToEat: 2300 },
  { id: '5', exerciseLevel: 5, weigth: 75, bmr: 1700, medianKcalLose: 700, recomendedKcalToEat: 2300 },
  { id: '5', exerciseLevel: 5, weigth: 75, bmr: 1700, medianKcalLose: 700, recomendedKcalToEat: 2300 },
  { id: '5', exerciseLevel: 5, weigth: 75, bmr: 1700, medianKcalLose: 700, recomendedKcalToEat: 2300 },
  { id: '5', exerciseLevel: 5, weigth: 75, bmr: 1700, medianKcalLose: 700, recomendedKcalToEat: 2300 },
  { id: '5', exerciseLevel: 5, weigth: 75, bmr: 1700, medianKcalLose: 700, recomendedKcalToEat: 2300 },
  { id: '5', exerciseLevel: 5, weigth: 75, bmr: 1700, medianKcalLose: 700, recomendedKcalToEat: 2300 },
  { id: '5', exerciseLevel: 5, weigth: 75, bmr: 1700, medianKcalLose: 700, recomendedKcalToEat: 2300 },
];