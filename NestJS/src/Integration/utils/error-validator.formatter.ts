import { InternalServerErrorException } from '@nestjs/common';

export function formatValidatorErrors(errors: any[]) {
  try {
    return errors
      .flat()
      .map((error) => ({
        ...(error.value ? { value: error.value } : {}),
        ...(error.constraints ? { matches: error.constraints } : {}),
      }))
      .filter((response) => Object.keys(response).length > 0);
  } catch (error) {
    throw new InternalServerErrorException(
      'Error during formatting validation errors.',
    );
  }
}
