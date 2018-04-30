import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import styles from './index.module.css'

const Category = ({ projects, category, isSelected, onCategoryClick }) => {
  const onClick = () => {
    onCategoryClick(category)
  }
  isSelected = typeof isSelected !== 'boolean' ? false : isSelected
  const magicNumber = 40 // take a guess at the height of each project link (px)
  const style = {
    maxHeight: isSelected ? `${projects.length * magicNumber}px` : 0
  }

  return (
    <li className={styles.root}>
      <h1 className={styles.title} onClick={onClick}>
        {" "}
        {category}{" "}
      </h1>
      <ul className={styles.list} style={style}>
        {projects.map(project => (
          <li key={project.slug} className={styles.listItem}>
            <Link to={`/projects/${project.slug}`} className={styles.listLink}>
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  )
}

Category.propTypes = {
  projects: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onCategoryClick: PropTypes.func.isRequired
}

export default Category
