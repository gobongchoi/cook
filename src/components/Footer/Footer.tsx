import React from 'react'

function Footer() {

    const footerBack: React.CSSProperties = {
        backgroundColor: 'rgb(31,31,31)',
        color: 'rgb(255, 255, 255, 1)',
        display: 'flex',
        padding: '50px',
        alignContent: 'right',
    }

    const footerCol: React.CSSProperties = {
        display: 'right',
    }

    const footerLine: React.CSSProperties = {
        borderTop: 'solid',
        display: 'flex',
    }

  return (
    <div style={footerBack}>
        <div style={footerLine}>
            <div style={footerCol}>
                <div> AGB </div>
                <div> Impressum </div>
                <div> Datenschutz </div>
            </div>
            <div>
                <div> Help </div>
                <div> Follow us On </div>
                <div> Become a Partner </div>
            </div>

        </div>
    </div>
  )
}

export default Footer