export interface Dimension{
  id_dimension: number;
  name_dimension: string;
  questions_amount: number;
  points: number;
  id_perspective: number;

}

export interface createDimensionDto{

  name_dimension: string;
  id_perspective: number;
  points: number;
}

export interface updateDimensionDto{

  name_dimension: string;
}
