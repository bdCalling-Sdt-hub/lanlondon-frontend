import AddQuestions from '@/components/ui/brand-dashboard/AddQuestions/AddQuestions';
import React, { Suspense } from 'react';

const AddQuestionsPage = () => {
    return (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <AddQuestions />
        </Suspense>
        </div>
    );
};

export default AddQuestionsPage;