export default function AppLogo() {
    const subTitle = 'it suphan';
    const dateNow = new Date()
    const timeNow = <p>{dateNow.toLocaleTimeString()}</p>
    const isShow = true
    const isShowDate = false
  return (
    <>
      <p style={{color: "red"}}>My Logo</p>
      <small>{subTitle.toUpperCase()}</small>
      {' '}
      {
        isShow && <div>ขณะนี้เวลา : {timeNow}</div>
      }
      {
        isShowDate ? <small>{dateNow.toLocaleDateString()}</small> :
        <small>{timeNow}</small>
      }
    </>
  );
}