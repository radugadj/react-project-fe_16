import React, {useState } from 'react';
import {
  Form,
  Input,
} from 'antd';



const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegistrationForm = () => {
  const [form] = Form.useForm();
  const [formValid] = useState(false);

  

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };


  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: '375',
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'Неправильный E-mail!',
          },
          {
            required: true,
            message: 'Пожалуйста введите ваш E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Пароль"
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите пароль',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Пароль"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Пожалуйста повторите пароль!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('Два введенных вами пароля не совпадают!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="nickname"
        label="Имя"
        tooltip="Введите имя, для обращения к вам"
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите ваше имя',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Телефон"
        
        rules={[
          {
            required: true,
            message: 'Введите ваш номер телефона!',
          },
        ]}
      >
        <Input 
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        type="tel"
        required
        placeholder="+375 29 100-10-10"/>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <button className="button_login" disabled={!formValid} type="submit">
          Регистрация
        </button>
      </Form.Item>
    </Form>
  );
};

export default () => <RegistrationForm />;