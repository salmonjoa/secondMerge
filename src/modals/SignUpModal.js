import React, { useState } from "react";
import { Modal, Button, Container, Form } from "react-bootstrap";
import HorizonLine from "../component/HorizonLine";
import axios from "axios";

// 회원가입
const SignUpModal = ({ show, onHide }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setname] = useState("");
  const [Ponumber, setPonumber] = useState("");
  const [Rpass, setRpass] = useState("");

  // 회원가입을 하면 자동로그인 되게하기

  //회원정보 보내기
  const register = () => {
    axios
      .post("http://192.168.0.10:8080/api/register", {
        nickname: name,
        memberID: email,
        memberPW: password,
        phoneNumber: Ponumber,
      })

      // 동시에 이루어지는것을 막음
      .then((response) => {
        // Handle success.
        document.location.href = "/";
        console.log("회원가입!", response.data);
        alert("회원가입 완료!");
        // localStorage.setItem("token", response.data.jwt);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">회원가입</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>이메일</Form.Label>
              <Form.Control
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                type="email"
                placeholder="이메일을 입력해주세요"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                type="password"
                placeholder="비밀번호를 입력해주세요"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>비밀번호 확인</Form.Label>
              <Form.Control
                type="Rpass"
                placeholder="비밀번호 확인"
                value={Rpass}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>이름</Form.Label>
              <Form.Control
                placeholder="이름을 입력해주세요"
                value={name}
                onChange={(event) => {
                  setname(event.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>전화 번호</Form.Label>
              <Form.Control
                placeholder="전화번호를 입력해주세요"
                value={Ponumber}
                onChange={(event) => {
                  setPonumber(event.target.value);
                }}
              />
            </Form.Group>

            <Button
              variant="info"
              type="button"
              className="my-3"
              onClick={() => {
                register();
              }}
            >
              회원가입
            </Button>

            <HorizonLine text={"OR"} />
          </Form>
        </Modal.Body>
      </Container>
    </Modal>
  );
};

export default SignUpModal;
