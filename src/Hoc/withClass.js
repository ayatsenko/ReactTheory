// eslint-disable-next-line no-unused-vars,no-use-before-define
import React from 'react'

const withClass = (Component, className) => {
  // eslint-disable-next-line react/display-name
  return props => {
    return (
            <section className={className}>
                <Component {...props} />
            </section>
    )
  }
}

export default withClass
