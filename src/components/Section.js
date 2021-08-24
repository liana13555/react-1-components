import PropTypes from 'prop-types';

function Section({ title, children }) {
    return <div>
        {title && <h2>{title}</h2>}
        {children}
    </div>
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,   // node - может быть что угодно
}

export default Section;

// {title && <h2>{title}</h2>} - условие: если есть title, то рендерь h2