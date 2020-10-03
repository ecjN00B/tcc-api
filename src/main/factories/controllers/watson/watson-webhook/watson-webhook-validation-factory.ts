import { ValidationComposite, RequiredFieldValidation } from '../../../../../validation/validators'
import { Validation } from '../../../../../presentation/protocols/validation'

export const makeWatsonWebhookValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['method', 'path']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}