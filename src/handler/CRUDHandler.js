export const handleUpdate = (entity, setEntities, updateEntity) => {
    updateEntity(entity).then((data) => {
        setEntities((prev) => [...prev.filter((object) => object.id !== data.id), data]);
    });
};

export const handleDelete = (entity, setEntities, deleteEntity) => {
    deleteEntity(entity.id).then(() => {
        setEntities((prev) => [...prev.filter((object) => object.id !== entity.id)])
    });
};