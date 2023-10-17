import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import InputErrorMessage from '../../components/inputErrorMessage'
import { ACCESS_TOKEN, setCookie } from '../../helpers/cookie'
import { useNavigate } from 'react-router-dom'
const LoginPage = () => {
  const [passwordShown, setPasswordShown] = useState(false)
  const navigate = useNavigate()
  const form = useForm({
    mode: 'onChange',
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form

  const isFormValid = !!Object.keys(errors).length

  const onSubmit = (data: any) => {
    setCookie({
      key: ACCESS_TOKEN,
      data: {
        ...data,
        token: Math.floor(Math.random() * 10),
      },
      expiresIn: 3600,
    })
    navigate('/home')
  }

  return (
    <div className="form-container">
      <h1>Login Page</h1>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-login">
            <label>Phone Number</label>
            <input
              {...register('phoneNumber', {
                required: 'Please input phone number',
                minLength: {
                  value: 10,
                  message: 'Phone number atleast has 10 digits',
                },
              })}
              type="number"
              placeholder="Nomor WhatsAppmu"
              // @ts-ignore
              onWheel={(e) => e.target.blur()}
            />
            {errors?.phoneNumber && (
              <InputErrorMessage
                errorMessage={`${errors.phoneNumber.message}`}
              />
            )}
          </div>
          <div className="form-login">
            <label>Password</label>
            <div className="div-input-password">
              <input
                className="input-password"
                type={passwordShown ? 'text' : 'password'}
                {...register('password', {
                  required: 'Please input password',
                  minLength: {
                    value: 6,
                    message: 'Password atleast has 6 character',
                  },
                })}
              />
              <div
                onClick={() => setPasswordShown((prev) => !prev)}
                className="button-eye"
              >
                {!passwordShown ? (
                  <img
                    src="/icon/eye-fill.svg"
                    alt="eye-on"
                    className="img-eye"
                    aria-hidden="true"
                  />
                ) : (
                  <img
                    src="/icon/eye-off-fill.svg"
                    alt="eye-off"
                    className="img-eye"
                    aria-hidden="true"
                  />
                )}
              </div>
            </div>
            {errors?.password && (
              <InputErrorMessage errorMessage={`${errors.password.message}`} />
            )}
          </div>
          <button disabled={isFormValid} type="submit">
            Login
          </button>
        </form>
      </FormProvider>
    </div>
  )
}

export default LoginPage
