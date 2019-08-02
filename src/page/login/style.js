import styled from 'styled-components'

export const LoginWrapper = styled.div`
    z-index: 0;
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 56px;
	background: #f1f1f1;
`
export const LoginBox = styled.div`
   margin : 60px auto 0;
   background-color: #fff;
   padding: 50px 50px 30px;
   border-radius: 4px;
   width: 400px;
   box-sizing : border-box;
   box-shadow: 0 0 8px rgba(0,0,0,.1);
   text-align : center;
`

export const Title = styled.div`
	text-align : center;
	margin-bottom : 50px;
	b{
	    padding : 10px;
	}
	
`;
export const LoginTitle = styled.a`
	color: #ea6f5a;
	padding : 10px;
	font-size : 18px;
	font-weight : 700;
    border-bottom: 2px solid #ea6f5a;
`;

export const RegisterTitle = styled.a`
    color: #969696;
    font-size : 18px;
	font-weight : 400;
    padding : 10px;
`;

export const Input = styled.input`
    width: 100%;
	display: inline-block;
	height: 50px;
    box-sizing : border-box;
	line-height: 30px;
	padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
	color: #777;
	outline : none;
	background-color: hsla(0,0%,71%,.1);
	&.account{
        border-radius: 4px 4px 0 0;
        margin-bottom:-1px;  
	}
	&.password{
	    border-radius: 0 0 4px 4px;
	}
`;

export const Button = styled.div`
	line-height: 30px;
	color: #fff;
	background: #3194d0;
	border-radius: 25px;
	padding : 9px 18px;
	margin: 40px auto;
	text-align: center;
	&:hover{
		background: #187cb7;
	}
`;
