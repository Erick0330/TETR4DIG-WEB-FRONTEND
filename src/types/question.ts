export interface Question {

  id_question: number;
  points: number;
  id_dimension: number;
  question: string;

}

export interface createQuestionDto {
  points: number;
  id_dimension: number;
  question: string;
}
