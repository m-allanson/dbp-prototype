import React from 'react'
import ProjectList from '../project-list/ProjectList'

const Category = ({
  category,
  isSelected,
  onCategoryClick
}) => {
  const onClick = () => { onCategoryClick(category.id) }
  isSelected = typeof isSelected !== 'boolean' ? false : isSelected

  return (
    <li className='Category'>
      <h1 className='Category-Title' onClick={onClick}> {category.name} </h1>
      <ProjectList projects={category.projects} isSelected={isSelected} />
    </li>
  )
}

Category.propTypes = {
  category: React.PropTypes.object.isRequired,
  isSelected: React.PropTypes.bool,
  onCategoryClick: React.PropTypes.func.isRequired
}

export default Category
