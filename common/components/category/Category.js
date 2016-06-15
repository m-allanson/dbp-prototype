import React from 'react'
import ProjectList from '../project-list/ProjectList'

const Category = ({
  category,
  isSelected,
  onCategoryClick
}) => {
  const onClick = () => { onCategoryClick(category.id) }
  const projectList = isSelected ? <ProjectList projects={category.projects} /> : ''

  return (
    <li className='Category'>
      <h1 className='Category-Title' onClick={onClick}> {category.name} </h1>
      {projectList}
    </li>
  )
}

Category.propTypes = {
  category: React.PropTypes.object.isRequired,
  isSelected: React.PropTypes.bool.isRequired,
  onCategoryClick: React.PropTypes.func.isRequired
}

export default Category
