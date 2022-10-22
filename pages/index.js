import Layout from '../components/Layout'
import { TextInput, Label, Button } from 'flowbite-react'

export default function Home() {
  return (
    <Layout title='Home'>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="password1"
            value="Your password"
          />
        </div>
        <TextInput
          id="password1"
          type="password"
          required={true}
        />
      </div>
      <Button type="submit">
        Submit
      </Button>
      </Layout>
  )
}
