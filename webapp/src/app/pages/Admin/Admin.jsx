import React, { useState } from 'react';

import { Grid } from '@mui/material';
import StyledContainer from '../../components/StyledContainer';
import AdminAddSkillModal from '../../features/AdminAddSkillModal';
import AdminSkillsCard from '../../features/AdminSkillsCard';
import AdminLogsCard from '../../features/AdminLogsCard';
import AdminEditSkillModal from '../../features/AdminEditSkillModal';
import AdminDeleteSkillModal from '../../features/AdminDeleteSkillModal';

const Admin = () => {
    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);

    return (
        <StyledContainer>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                    <AdminSkillsCard addModal={setAddModal} editModal={setEditModal} deleteModal={setDeleteModal} />
                </Grid>
                <Grid item xs={12} sm={6} md={8}>
                    <AdminLogsCard />
                </Grid>
            </Grid>
            <AdminAddSkillModal modal={addModal} setModal={setAddModal} />
            <AdminEditSkillModal modal={editModal} setModal={setEditModal} />
            <AdminDeleteSkillModal modal={deleteModal} setModal={setDeleteModal} />
        </StyledContainer>
    )
}

export default Admin;