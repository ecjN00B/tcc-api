import { ValidationComposite, RequiredFieldValidation } from '../../../../../validation/validators'
import { Validation } from '../../../../../presentation/protocols/validation'

export const makeLocationValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['lat', 'lng']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}