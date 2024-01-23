import Form from "@/components/utils/Form";

export default function LoginPage() {
  const fields = [
    { id: 'email', label: 'Email:', placeholder: 'Enter email' },
    { type: 'password', id: 'password', label: 'Password:', placeholder: 'Enter password' }
  ];
  return (
    <>
      <Form
        fields={fields}
        btnLabel='Login'
      />
    </>
  )
}
