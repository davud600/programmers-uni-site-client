type CourseType = 'first' | 'second' | 'third';

export interface Course {
  title: string;
  details: string;
  type: CourseType;
}
