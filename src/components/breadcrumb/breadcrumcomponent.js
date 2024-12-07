import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

export const BreadcrumbComponent = ({ page }) => {
  return (
    <Breadcrumb>
    <Breadcrumb.Item href="/" linkProps={{ style: { textDecoration: "none" } }}>Home</Breadcrumb.Item>
    <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

