type Props = {
  errorMessage: string
}

const InputErrorMessage = ({ errorMessage }: Props) => {
  return <p className="input-error-message">{errorMessage}</p>
}

export default InputErrorMessage
