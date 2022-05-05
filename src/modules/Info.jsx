export default function Info({ userInfo }) {
  const { firstName, lastName } = userInfo;
  console.log(userInfo);
  if (Object.keys(userInfo).length === 0) {
    return (
      <div>
        <h1>Write your name and loggin</h1> <br />
      </div>
    );
  } else {
    return (
      <>
        <h1>
          Welcome {firstName} {lastName}
        </h1>
      </>
    );
  }
}
