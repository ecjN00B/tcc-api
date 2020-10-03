import { ValidationComposite, RequiredFieldValidation } from '../../../../../validation/validators'
import { Validation } from '../../../../../presentation/protocols/validation'

export const makeWatsonMessageValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['userId', 'message']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}