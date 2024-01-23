import Form from "@/components/utils/Form";

export default function RegisterPage() {
  const fields = [
    { id: 'email', label: 'Email:', placeholder: 'Enter email' },
    { id: 'username', label: 'Username:', placeholder: 'Enter username' },
    { type: 'password', id: 'password', label: 'Password:', placeholder: 'Enter password' }
  ];

  return (
    <>
      <Form
        fields={fields}
        btnLabel='Register'
      />
    </>
  )
}
