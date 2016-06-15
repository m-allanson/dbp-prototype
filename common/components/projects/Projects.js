import React from 'react'
import Category from '../category/Category'
import _map from 'lodash/map'

const Projects = ({
  categories,
  selectedCategory,
  onClickHandler
}) => {
  return (
    <ol className='Projects'>
      {_map(categories, cat => (
        <Category
          key={cat.id}
          category={cat}
          isSelected={selectedCategory === cat.id}
          onCategoryClick={onClickHandler}
        />
      ))}
    </ol>
  )
}

Projects.propTypes = {
  categories: React.PropTypes.objectOf(React.PropTypes.object).isRequired,
  selectedCategory: React.PropTypes.number,
  onClickHandler: React.PropTypes.func.isRequired
}

export default Projects
