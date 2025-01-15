export interface Dimension{
  id_dimension: number;
  name_dimension: number;
  questions_amount: number;
  points: number;
  id_perspective: number;

}

export interface createDimensionDto{

  name_dimension: number;
  id_perspective: number;
}
