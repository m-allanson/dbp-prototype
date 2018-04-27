import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

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
    <li className="Category">
      <h1 className="Category-Title" onClick={onClick}>
        {" "}
        {category}{" "}
      </h1>
      <ul className="ProjectList" style={style}>
        {projects.map(project => (
          <li key={project.slug} className="ProjectList-item">
            <Link to={`/projects/${project.slug}`} className="ProjectList-link">
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
