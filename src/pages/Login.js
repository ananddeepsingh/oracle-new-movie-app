import {
  Form,
  Input,
  Alert
} from 'antd';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { loginAction } from "../actions/login.action";


const Login = () => {

  const dispatch = useDispatch();
  const [number, setNumber] = useState();
  const { errorMessageTxt } = useSelector((state) => state.errorMessage);
  const { fact } = useSelector((state) => state.auth);
  const [form] = Form.useForm();
  const state = useSelector((state) => state);
  console.log(state)

  const handleFact = async () => {
    console.log(+number)
    if (number === "") return false;
    await dispatch(loginAction(+number))
  }

  const onFinish = () => {

  }

  return <>
    {/* <Form form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        name="number"
        label="Please Enter Number"
        rules={[
          {
            required: true,
            message: "Please Enter Number"
          },
        ]}
      >
        <Input />
      </Form.Item>
    </Form> */}
    <h1>11111111111111111</h1>
    <input type="number" onChange={(event) => setNumber(event.target.value)} />
    <button onClick={() => handleFact()}>Get Fact</button>

    {
      fact && <Alert type="error" message={fact} />
    }

    {
      errorMessageTxt && <Alert type="error" message={errorMessageTxt} />
    }
  </>
}

export default Login;
