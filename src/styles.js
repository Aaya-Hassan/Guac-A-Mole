import styled from "styled-components";

export const Border = styled.div`
  height: 300px;
  width: 470px;
  border-color: black;
  border-style: solid;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
`;

export const Hole = styled.div`
  border-radius: 50%;
  height: 100px;
  width: 100px;
  background-color: black;
  margin: 20px;
  img {
    width: 80px;
    margin-top: 7px;
  }
`;

export const Button = styled.button`
  border-radius: 5%;
  margin: 2%;
  height: 60px;
  width: 23%;
  font-weight: bold;
  font-size: large;
  border: 3px solid #25E881;
  background: #fff;
  a {
    font-size: 25px;
    color: #25E881;
    text-decoration: none;
  }
`;