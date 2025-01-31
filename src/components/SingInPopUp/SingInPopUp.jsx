
import styles from './SingInPopUp.module.css'


export function SingInPopUp({showPopUp,popUp}) {
    const popUpLinks = [{
        svg: <svg width={'30px'} focusable="false" viewBox="2 2 24 24" __typename="HomebaseIcon" aria-hidden="true" data-hb-id="pl-icon" data-enzyme-id="HomebaseIcon" class="_1fr089m0 _1fr089m1"><path d="M14 4.5a9.5 9.5 0 109.5 9.5A9.51 9.51 0 0014 4.5zM9.26 21.05v-2.17a3.37 3.37 0 013.36-3.36h2.74a3.37 3.37 0 013.36 3.36v2.19a8.47 8.47 0 01-9.48 0zM14 14.5a2.5 2.5 0 112.5-2.5 2.5 2.5 0 01-2.5 2.5zm5.73 5.76v-1.38a4.37 4.37 0 00-3.44-4.26A3.45 3.45 0 0017.5 12a3.5 3.5 0 00-7 0 3.45 3.45 0 001.21 2.62 4.37 4.37 0 00-3.44 4.26v1.38a8.5 8.5 0 1111.46 0z"></path></svg>,
        title: "My Account"
    },
    {
        svg: <svg width={'30px'} focusable="false" viewBox="2 2 24 24" __typename="HomebaseIcon" aria-hidden="true" data-hb-id="pl-icon" data-enzyme-id="HomebaseIcon" class="_1fr089m0 _1fr089m1"><path d="M23.36 7a.48.48 0 00-.52-.13l-7.07 2.31-1.43-.54-1.69-3.36A.5.5 0 0012 5L4.83 7.72a.52.52 0 00-.3.28.53.53 0 000 .41l1.77 3.47v7.94a.5.5 0 00.32.46L13.78 23a.47.47 0 00.22 0 .59.59 0 00.31-.09l7.08-2.63a.49.49 0 00.33-.46v-8l1.76-4.38a.48.48 0 00-.12-.44zm-9.65 6.8l-5.48-2L14 9.6l1.1.41zM12 6.12l1.3 2.69L7 11.14 5.7 8.46zm1.5 15.68l-6.2-2.33v-7l6.2 2.31zm1 0v-7l6.2-2.31v7zm6.32-10.39l-6 2.22 1.32-3.49 5.95-2z"></path></svg>,
        title: "My Orders"
    },
    {
        svg: <svg width={'30px'} focusable="false" viewBox="2 2 24 24" __typename="HomebaseIcon" aria-hidden="true" data-hb-id="pl-icon" data-enzyme-id="HomebaseIcon" class="_1fr089m0 _1fr089m1"><path d="M14 22.5a.51.51 0 01-.36-.15l-7.85-8.14a5.34 5.34 0 01-1.29-3.45A5.2 5.2 0 019.63 5.5 5.08 5.08 0 0114 8.05a5.08 5.08 0 014.37-2.55 5.2 5.2 0 015.13 5.26 5.33 5.33 0 01-1.26 3.42l-7.88 8.17a.51.51 0 01-.36.15zm-4.37-16a4.2 4.2 0 00-4.13 4.26 4.29 4.29 0 001 2.78l7.5 7.74 7.49-7.77a4.26 4.26 0 00-3.12-7 4.12 4.12 0 00-3.89 2.92.53.53 0 01-1 0A4.12 4.12 0 009.63 6.5z"></path></svg>,
        title: "Lists"
    },
    {
        svg: <svg  width={'30px'} focusable="false" viewBox="0 0 24 24" __typename="HomebaseIcon" aria-hidden="true" data-hb-id="pl-icon" data-enzyme-id="HomebaseIcon" class="_1fr089m0 _1fr089m1"><path fill-rule="evenodd" d="M3 11.5C3 6.804 6.804 3 11.5 3S20 6.804 20 11.5a8.417 8.417 0 01-.996 3.979l1.47 4.361a.5.5 0 01-.635.634L15.497 19A8.498 8.498 0 013 11.5zM11.5 4A7.498 7.498 0 004 11.5a7.498 7.498 0 0011.087 6.586.5.5 0 01.504-.11l3.612 1.226-1.217-3.612a.5.5 0 01.04-.407A7.42 7.42 0 0019 11.5C19 7.356 15.644 4 11.5 4z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M11.725 8.414a.237.237 0 00-.45 0l-.698 1.953a.12.12 0 01-.107.082l-1.99.091c-.222.01-.313.304-.139.45L9.9 12.287a.13.13 0 01.041.132l-.532 2.01c-.059.224.18.406.365.277l1.66-1.15a.116.116 0 01.133 0l1.66 1.15c.186.129.425-.053.366-.277l-.533-2.01a.13.13 0 01.042-.132l1.558-1.299c.174-.145.083-.439-.14-.449l-1.989-.091a.12.12 0 01-.107-.082l-.698-1.953z" clip-rule="evenodd"></path></svg>,
        title: "Review My Purchases"
    },
    {
        svg: <svg width={'30px'} focusable="false" viewBox="2 2 24 24" __typename="HomebaseIcon" aria-hidden="true" data-hb-id="pl-icon" data-enzyme-id="HomebaseIcon" class="_1fr089m0 _1fr089m1"><path d="M23.7 19.29A6.35 6.35 0 0018 15.5a6.35 6.35 0 00-5.7 3.79.45.45 0 000 .42A6.35 6.35 0 0018 23.5a6.35 6.35 0 005.7-3.79.45.45 0 000-.42zM18 22.5a5.33 5.33 0 01-4.69-3 5.33 5.33 0 014.69-3 5.33 5.33 0 014.69 3 5.33 5.33 0 01-4.69 3z"></path><path d="M18 18.5a1 1 0 101 1 1 1 0 00-1-1zM9.42 20.87a8.5 8.5 0 1113.08-7.16.5.5 0 001 0 9.5 9.5 0 10-14.62 8 .47.47 0 00.27.08.51.51 0 00.43-.23.5.5 0 00-.16-.69z"></path><path d="M14.9 13.67V9.43a.5.5 0 00-.5-.5.51.51 0 00-.5.5v3.74h-2.56a.5.5 0 000 1h3.06a.5.5 0 00.5-.5z"></path></svg>,
        title: "Recently Viewed"
    },
    {
        svg:<svg width={'30px'} focusable="false" viewBox="2 2 24 24" __typename="HomebaseIcon" aria-hidden="true" data-hb-id="pl-icon" data-enzyme-id="HomebaseIcon" class="_1fr089m0 _1fr089m1"><path d="M14 23.5a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5zm0-18a8.5 8.5 0 108.5 8.5A8.51 8.51 0 0014 5.5z"></path><path d="M14 18a.5.5 0 01-.5-.5v-4a.5.5 0 011 0v4a.5.5 0 01-.5.5zM14 11.21a.63.63 0 11.62-.62.62.62 0 01-.62.62z"></path></svg>,
        title: "Help & Contact"
    },
    {
        svg: <svg  width={'30px'} focusable="false" viewBox="2 2 24 24" __typename="HomebaseIcon" aria-hidden="true" data-hb-id="pl-icon" data-enzyme-id="HomebaseIcon" class="_1fr089m0 _1fr089m1"><path d="M23 5.5h-9.37a.5.5 0 00-.5.5v4.48L12 9.39a.5.5 0 00-.7 0L4.71 16a.5.5 0 000 .71l6.63 6.62a.48.48 0 00.7 0l6.63-6.62a.5.5 0 000-.71l-.15-.15H23a.5.5 0 00.5-.5V6a.5.5 0 00-.5-.5zm-5.39 10.87l-5.92 5.92-5.92-5.92 5.92-5.92 1.44 1.44v3.48a.5.5 0 00.5.5h3.48zm4.89-1.5h-8.37V6.5h8.37z"></path></svg>,
        title: "Design Services"
    }]

    const popUpLinksBottom = [
    {
        svg:<svg width={'30px'} focusable="false" viewBox="2 3 24 24" aria-hidden="true" data-hb-id="pl-icon" class="_1fr089m0"><path d="M20 10h-3.2a3 3 0 00.2-1 3 3 0 00-5-2.2 3 3 0 00-4.8 3.4A2 2 0 006 12v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2zm-10 2v1H8v-1h2zm10 1h-8v-1h8v1zm-6-5a1 1 0 11-1 1 1 1 0 011-1zm-4 0a1 1 0 11-1 1 1 1 0 011-1zm-2 8h2v4H8v-4zm4 4v-4h8v4h-8z"></path></svg>,
        title: "Gift Card"
    },
    {
         svg: <svg width={'30px'} focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-hb-id="pl-icon" class="_1fr089m0 _1fr089m1"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.3968 6.67463L12.6556 2.76269C12.1532 2.47115 11.5343 2.47115 11.0319 2.76269L4.29066 6.67463C3.78826 6.96617 3.47877 7.50497 3.47877 8.08807V15.9119C3.47877 16.495 3.78826 17.0338 4.29066 17.3254L11.0319 21.2373C11.5343 21.5289 12.1532 21.5289 12.6556 21.2373L19.3968 17.3254C19.8992 17.0338 20.2087 16.495 20.2087 15.9119V8.08807C20.2087 7.50497 19.8992 6.96617 19.3968 6.67463ZM12.9263 2.29155C12.2564 1.90282 11.4311 1.90282 10.7612 2.29155L4.02003 6.20348C3.35016 6.59221 2.9375 7.31061 2.9375 8.08807V15.9119C2.9375 16.6894 3.35016 17.4078 4.02003 17.7965L10.7612 21.7085C11.4311 22.0972 12.2564 22.0972 12.9263 21.7085L19.6675 17.7965C20.3373 17.4078 20.75 16.6894 20.75 15.9119V8.08807C20.75 7.31061 20.3373 6.59221 19.6675 6.20348L12.9263 2.29155Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.8437 6.3718L6.99438 9.1859V14.8141L11.8437 17.6282L16.6931 14.8141V9.1859L11.8437 6.3718ZM17.2344 8.8718L11.8437 5.74361L6.45312 8.8718V15.1282L11.8437 18.2564L17.2344 15.1282V8.8718Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.1144 2.4794V6.28764H11.5731V2.4794L12.1144 2.4794Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.1144 17.7124V21.5206H11.5731V17.7124H12.1144Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20.1822 7.47527L16.9009 9.37939L16.6303 8.90824L19.9116 7.00412L20.1822 7.47527Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.05719 15.0918L3.77594 16.9959L3.50531 16.5247L6.78656 14.6206L7.05719 15.0918Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19.9116 16.9959L16.6303 15.0918L16.9009 14.6206L20.1822 16.5247L19.9116 16.9959Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.78656 9.37939L3.50531 7.47527L3.77594 7.00412L7.05719 8.90824L6.78656 9.37939Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19.3968 6.67463L12.6556 2.76269C12.1532 2.47115 11.5343 2.47115 11.0319 2.76269L4.29066 6.67463C3.78826 6.96617 3.47877 7.50497 3.47877 8.08807V15.9119C3.47877 16.495 3.78826 17.0338 4.29066 17.3254L11.0319 21.2373C11.5343 21.5289 12.1532 21.5289 12.6556 21.2373L19.3968 17.3254C19.8992 17.0338 20.2087 16.495 20.2087 15.9119V8.08807C20.2087 7.50497 19.8992 6.96617 19.3968 6.67463ZM12.9263 2.29155C12.2564 1.90282 11.4311 1.90282 10.7612 2.29155L4.02003 6.20348C3.35016 6.59221 2.9375 7.31061 2.9375 8.08807V15.9119C2.9375 16.6894 3.35016 17.4078 4.02003 17.7965L10.7612 21.7085C11.4311 22.0972 12.2564 22.0972 12.9263 21.7085L19.6675 17.7965C20.3373 17.4078 20.75 16.6894 20.75 15.9119V8.08807C20.75 7.31061 20.3373 6.59221 19.6675 6.20348L12.9263 2.29155Z" stroke-width="0.6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11.8437 6.3718L6.99438 9.1859V14.8141L11.8437 17.6282L16.6931 14.8141V9.1859L11.8437 6.3718ZM17.2344 8.8718L11.8437 5.74361L6.45312 8.8718V15.1282L11.8437 18.2564L17.2344 15.1282V8.8718Z" stroke-width="0.6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.1144 2.4794V6.28764H11.5731V2.4794L12.1144 2.4794Z" stroke-width="0.6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.1144 17.7124V21.5206H11.5731V17.7124H12.1144Z" stroke-width="0.6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20.1822 7.47527L16.9009 9.37939L16.6303 8.90824L19.9116 7.00412L20.1822 7.47527Z" stroke-width="0.6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.05719 15.0918L3.77594 16.9959L3.50531 16.5247L6.78656 14.6206L7.05719 15.0918Z" stroke-width="0.6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19.9116 16.9959L16.6303 15.0918L16.9009 14.6206L20.1822 16.5247L19.9116 16.9959Z" stroke-width="0.6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.78656 9.37939L3.50531 7.47527L3.77594 7.00412L7.05719 8.90824L6.78656 9.37939Z" stroke-width="0.6"></path></svg>,
        title: "Wayfair Rewards"
    },
    {
        svg:<svg width={'30px'} focusable="false" viewBox="2 2 24 24" __typename="HomebaseIcon" aria-hidden="true" data-hb-id="pl-icon" data-enzyme-id="HomebaseIcon" class="_1fr089m0 _1fr089m1"><path d="M22 8.5H6A1.5 1.5 0 004.5 10v10A1.5 1.5 0 006 21.5h16a1.5 1.5 0 001.5-1.5V10A1.5 1.5 0 0022 8.5zm-16 1h16a.5.5 0 01.5.5v2.87h-17V10a.5.5 0 01.5-.5zm16 11H6a.5.5 0 01-.5-.5v-6.13h17V20a.5.5 0 01-.5.5z"></path></svg>,
        title: "Wayfair Credit Card"
    },
    {
        svg: <svg width={'30px'} focusable="false" viewBox="0 1 24 24" aria-hidden="true" data-hb-id="pl-icon" class="_1fr089m0"><path d="M16.36 2.46v1.16a2.22 2.22 0 012.08 2.26h-1.19a1.2 1.2 0 00-1.35-1.17 1.21 1.21 0 00-1.34 1.07c0 .3.12.78 1 1l1 .26c1.56.42 2.21 1.29 2.09 2.41a2.34 2.34 0 01-2.32 2.07v1.25h-.73v-1.25a2.46 2.46 0 01-2.3-2.34h1.2a1.44 1.44 0 001.5 1.27 1.31 1.31 0 001.5-1.06c.05-.71-.51-1.09-1.23-1.26l-1-.25c-1.67-.45-1.93-1.39-1.93-2.08a2.31 2.31 0 012.26-2.19V2.46z" fill="#29202c" stroke="#29202c" stroke-miterlimit="10"></path><path d="M6.5 12.35h4.35a.51.51 0 01.35.15l2.87 2.87h0a2 2 0 01.57 1.38 2.08 2.08 0 01-.12.66h2.98" fill="none" stroke="#29202c" stroke-miterlimit="10"></path><path d="M14.57 17.45a2.08 2.08 0 00.12-.66 2 2 0 00-.57-1.38h0L11.2 12.5a.51.51 0 00-.35-.15H2.93a.5.5 0 00-.5.5.5.5 0 00.5.5h7.71l2.77 2.77h0a.93.93 0 01.25.64 1 1 0 01-.28.68 1 1 0 01-1.35 0l-1.69-1.69a.5.5 0 00-.71 0 .5.5 0 000 .7l1.69 1.69a1.93 1.93 0 002.41.28h5.87a.95.95 0 010 1.9H8.09l-4.23-2.79a.48.48 0 00-.28-.08h-.65a.5.5 0 00-.5.5.5.5 0 00.5.5h.5l4.23 2.82a.48.48 0 00.28.08h11.69a2 2 0 000-3.9z" fill="#231f20" stroke="#29202c" stroke-miterlimit="10"></path></svg>,
        title: "Wayfair Financing"
    }]

    
    return (
        <>
        { popUp ? <div onMouseLeave={showPopUp} className={styles.popUp}>
                <div className={styles.popUpConteiner}>
                    <button>Sing In</button>
                    <a href="https://www.wayfair.com/v/account/authentication/create?url=https%3A%2F%2Fwww.wayfair.com%2Fkitchen-tabletop%2Fpdp%2Foxo-good-grips-3-piece-mixing-bowl-set-oxo1131.html&context=header_wayfair_my_account_menu">Create an Account</a>
                    <div className={styles.popUpBorder}>
                        {popUpLinks.map((item, index) => (
                            <div className={styles.popUpLink} key={index} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 16px", cursor: "pointer" }}>
                                {item.svg}
                                <span>{item.title}</span>
                            </div>
                        ))}
                    </div>
                    <div className={styles.popUpBorder}>
                        {popUpLinksBottom.map((item, index) => (
                            <div className={styles.popUpLink} key={index} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "8px 16px", cursor: "pointer" }}>
                                {item.svg}
                                <span>{item.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        :
        ""
    }
            
        </>
    )
}