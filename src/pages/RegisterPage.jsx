import Form from "@/components/utils/Form";
import FormWrapperLayout from "@/components/utils/FormWrapperLayout";

export default function RegisterPage() {
  const fields = [
    { id: 'email', label: 'Email:', placeholder: 'Enter email' },
    { id: 'username', label: 'Username:', placeholder: 'Enter username' },
    { type: 'password', id: 'password', label: 'Password:', placeholder: 'Enter password' }
  ];

  return (
    <FormWrapperLayout>
      <Form
        fields={fields}
        btnLabel='Register'
      />
    </FormWrapperLayout>
  )
}
