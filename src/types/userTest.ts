export interface UserTest {
  id: number;
  id_user: number;
  testDate: Date;
  ambits_result: string;
  perspectives_result: string;
  dimensions_result: string;
}

export interface createUserTestsDto {

  id_user: number;
  ambits_result: string;
  perspectives_result: string;
  dimensions_result: string;
}
