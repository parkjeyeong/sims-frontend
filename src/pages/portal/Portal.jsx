import { Form, Input, Button, Layout } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styled from 'styled-components';

function Portal() {
  const MainLayout = styled(Layout)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    min-height: 500px;
  `;

  const SigninForm = styled(Form)`
    width: 400px;
    height: 300px;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 2px rgb(0 0 0 / 10%);
  `;

  const SigninButton = styled(Button)`
    width: 100%;
  `;

  const Title = styled.h1`
    font-weight: 700;
  `;

  function onFinish(values) {
    console.log(values);
  }

  return (
    <MainLayout>
      <Title>SIMS</Title>
      <SigninForm onFinish={ onFinish }>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <SigninButton type="primary" htmlType="submit" className="Signin-form-button">
            Sign in
          </SigninButton>
        </Form.Item>
      </SigninForm>
    </MainLayout>
  );
}

export default Portal;