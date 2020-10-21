import { ValidationComposite, RequiredFieldValidation } from '../../../../../validation/validators'
import { Validation } from '../../../../../presentation/protocols/validation'

export const makeWatsonAudioMessageValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['userId', 'audio']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}