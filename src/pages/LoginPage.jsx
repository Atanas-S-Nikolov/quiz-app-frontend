import '@/styles/pages/LoginPage.css';

import Form from "@/components/utils/Form";
import FormWrapperLayout from '@/components/utils/FormWrapperLayout';

export default function LoginPage() {
  const fields = [
    { id: 'email', label: 'Email:', placeholder: 'Enter email' },
    { type: 'password', id: 'password', label: 'Password:', placeholder: 'Enter password' }
  ];
  return (
    <FormWrapperLayout>
      <Form
        fields={fields}
        btnLabel='Login'
      />
      <section className="links">
        <a href="/forgotPassword">Forgot password</a>
        <span>Don&apos;t have account? <a href="../register">Register</a></span>
      </section>
    </FormWrapperLayout>
  )
}
