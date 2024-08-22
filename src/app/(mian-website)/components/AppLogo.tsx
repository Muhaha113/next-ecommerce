'use client'
type AppLogoProps = {
  title: string

  rgb: string
}
export default function AppLogo({title,rgb} :AppLogoProps)
{
    const subTitle = 'it suphan';
    const dateNow = new Date()
    const timeNow = <p>{dateNow.toLocaleTimeString()}</p>
    const isShow = true
    const isShowDate = false
    const onHandleClick = ()=>{
      alert("Click Me!")
    }
  return (
    <>
      <p style={{color: rgb}}>{title}</p>
      <button onClick={onHandleClick}>Click ME</button> {'  '}
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